import React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
    errors: any;
}

export default function ValidationErrors({errors}: Props) {

    let i = errors;
    
    return (
        <Message error>
            {errors && (
                        <Message.Item >errors</Message.Item>
            )}
        </Message>
    )
}