import React, { useEffect, useState } from 'react';
import { Box, Center, Grid, Stack, Text } from '@chakra-ui/react';
import { Recorder } from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css'
import axios from 'axios';
import Result from './Result';
import Status from './Status';
import { key } from './secretAI';

export default function LieDetector() {

    const assemblyApi = axios.create({
        baseURL: 'https://api.assemblyai.com/v2',
        headers: {
            authorization: key,
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

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <Stack spacing={8} >
                    <Box>
                        {trasncript.text && trasncript.status === 'completed' ? (
                            <Result transcript={trasncript} />
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