
import React from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Label } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from 'yup';
import ValidationErrors from "../learningUnits/errors/ValidationErrors";

export default observer(function RegisterForm() {

    const { userStore } = useStore();

    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.register(values).catch(error =>
                setErrors({ error }))}
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className="groupCenterInlineForm" onSubmit={handleSubmit} autoComplete="off">
                    <MyTextInput name="displayName" placeholder="Display Name" />
                    <MyTextInput name="username" placeholder="Username" />
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type='password' />
                    <ErrorMessage
                        name="error" render={() => 
                        <ValidationErrors errors={errors.error} />}
                    />
                    <Button disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} className="button-68" type="submit" content="Register" fluid />
                </Form>
            )}
        </Formik>
    )
})

//disable the registe button if eigther isValid or dirty has its value set to false