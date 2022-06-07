import { Text } from "@chakra-ui/react";

export default function Result({transcript}) {
    return (
        <div>
            <Text>{transcript.text}</Text>
        </div>
    )
}