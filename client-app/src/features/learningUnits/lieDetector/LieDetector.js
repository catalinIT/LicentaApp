import React, { useEffect, useState } from 'react';
import { Box, Center, Grid, Stack, Text } from '@chakra-ui/react';
import { Recorder } from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css'
import axios from 'axios';
import Result from './Result';
import Status from './Status';
import { key } from './secretAI';
import { Button } from 'semantic-ui-react';

export default function LieDetector() {

    const assemblyApi = axios.create({
        baseURL: 'https://api.assemblyai.com/v2',
        headers: {
            authorization: key,
            'content-type': 'application/json'
        },
    });

    const fastApi = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {
            'content-type': 'application/json'
        },
    });

    const initialState = {
        url: null,
        blob: null,
        chunks: null,
        duration: {
            h: 0,
            m: 0,
            s: 0,
        },
    }
    //creating a state that's about to be managed by the audio recorder
    const [audioDetails, setAudioDetails] = useState(initialState)

    // trasncript - represents the actual data that's returned by the AssemblyAI's API
    const [trasncript, setTranscript] = useState({ id: '' });

    // component that is about to be updated while we make the API request
    const [isLoading, setIsLoading] = useState(false);

    const [isLieDetectorLoading, setIsLieDetectorLoading] = useState(false);

    const [liePrediction, setLiePrediction] = useState("");

    useEffect(() => {
        const interval = setInterval(async () => {
            if (trasncript.status !== 'completed' && isLoading) {
                try {
                    const { data: transcriptData } = await assemblyApi.get(
                        `/transcript/${trasncript.id}`
                    );
                    setTranscript({ ...trasncript, ...transcriptData });
                } catch (err) {
                    console.error(err);
                }
            } else {
                setIsLoading(false);
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isLoading, trasncript]);

    const handleAudioStop = (data) => {
        setAudioDetails(data);
    }

    const handleReset = () => {
        setAudioDetails({ ...initialState });
        setTranscript({ id: '' });
        setIsLieDetectorLoading(false);
    };

    const handleAudioUpload = async (audioFile) => {
        setIsLoading(true);

        const { data: uploadResponse } = await assemblyApi.post('/upload',
            audioFile);

        const { data } = await assemblyApi.post('/transcript', {
            audio_url: uploadResponse.upload_url,
            sentiment_analysis: true,
            entity_detection: true,
            iab_categories: true,
        })

        setTranscript({ id: data.id });
    }

    const handleLieResponse = async (sentence) => {
        setIsLieDetectorLoading(true);

        const response = await fastApi.post('/predict',
            {
                "statement_normalized": sentence
            });

        const prediction = response.data.prediction;
        prediction ? setLiePrediction("possibly a lie") : setLiePrediction("the truth and only the truth")
        console.log(prediction);
    }

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <Stack spacing={8} >
                    <Box>
                        {trasncript.text && trasncript.status === 'completed' ? (
                            <Box>
                                <Result transcript={trasncript} />
                                <Button onClick={() => handleLieResponse(trasncript.text)}>
                                    Let's see if you are lying
                                </Button>
                                <Box>
                                    {isLieDetectorLoading ? (
                                        <Box>
                                            <Text>It looks like you have told <b>{liePrediction}</b></Text>
                                            <Text>You can press the Clear button and then record yourself again</Text>
                                        </Box>
                                    ) : (
                                        <Text></Text>
                                    )}
                                </Box>
                            </Box>
                        ) : (
                            <Status isLoading={isLoading} status={trasncript.status} />
                        )}
                    </Box>
                    <Center>
                        <Box width={600}>
                            <Recorder
                                record={trasncript}
                                audioURL={audioDetails.url}
                                handleAudioStop={handleAudioStop}
                                handleAudioUpload={handleAudioUpload}
                                handleReset={handleReset}
                            />
                        </Box>
                    </Center>
                </Stack>
            </Grid>
        </Box>
    )
}