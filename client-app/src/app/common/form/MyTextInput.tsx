import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    type? : string;
    label?: string;
}

const inputText = {
    margin:'4px'
};

const inputStyle = {
    width: '-webkit-fill-available'
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name); 
    return (
        <Form.Field style={inputText} error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <input style={inputStyle} {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}