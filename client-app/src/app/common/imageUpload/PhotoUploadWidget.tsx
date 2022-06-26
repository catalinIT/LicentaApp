import { Box, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup, Container, Grid, TextareaAutosize } from "@mui/material";
import Tesseract from 'tesseract.js';
import axios from "axios";

export default function PhotoUploadWidget() {

    const initialText = "Text retrieved from the image"
    const [files, setFiles] = useState<any>([]);
    const [textImage, setTextImage] = useState<string>(initialText);
    const [isLieDetectorLoading, setIsLieDetectorLoading] = useState(false);
    const [liePrediction, setLiePrediction] = useState("");

    const fastApi = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {
            'content-type': 'application/json'
        },
    });

    const onSubmit = (myImage: any) => {
        Tesseract.recognize(
            myImage,
            'eng',
            { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            setTextImage(text);
        })
    }

    const onClose = () => {
        setTextImage("Text retrieved from the image");
        setFiles([])
    }

    const onCancel = () => {
        setTextImage("Text retrieved from the image");
        setIsLieDetectorLoading(false);
    }

    const handleLieResponse = async (sentence: string) => {
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
        <Grid container spacing={2} columns={16}>
            <Grid item xs={4}>
                <Text>Add Photo</Text>
                <PhotoWidgetDropzone setFiles={setFiles} />
            </Grid>
            <Grid item xs={7}>
                <Text>Preview</Text>
                {files && files.length > 0 && (
                    <>
                        <Image style={{ float: "left" }} src={files[0].preview} />
                        <ButtonGroup className="three-section-element">
                            <Button onClick={() => onSubmit(files[0])} color="success">
                                Upload
                            </Button>
                            <Button onClick={onClose} color="error">
                                Close
                            </Button>
                        </ButtonGroup>
                    </>
                )}
            </Grid>
            <Grid item xs={5}>
                <Text>Test the lie detector</Text>
                <>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder={textImage}
                        style={{ width: 500, float: "left" }}
                    />

                    {(textImage !== initialText) && (
                        <ButtonGroup className="three-section-element">
                            <Button onClick={() => handleLieResponse(textImage)} color="success">
                                Upload
                            </Button>
                            <Button onClick={onCancel} color="error">
                                Cancel
                            </Button>
                        </ButtonGroup>
                    )}
                    <Box>
                        {isLieDetectorLoading ? (
                            <Box className="three-section-element">
                                <Text>It looks like you have told <b>{liePrediction}</b></Text>
                                <Text>You can press the Clear button and upload another Photo</Text>
                            </Box>
                        ) : (
                            <Text></Text>
                        )}
                    </Box>
                </>
            </Grid>
        </Grid>
    )
}

// after the image has been cropped, we are going to send a blob of it to the server
// inlocuieste console.log(blob) cu actual functionality of the blob image