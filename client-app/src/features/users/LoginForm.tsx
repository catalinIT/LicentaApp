import { values } from "mobx";
import React from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Label } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function LoginForm() {

    const {userStore} = useStore();
    
    return (
        <Formik
           initialValues={{email: '', password: '', error: null}}
           onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
            setErrors({error: 'Invalid email or password'}))}
        >
            {({handleSubmit, isSubmitting, errors}) => (
                <Form className="groupCenterInlineForm" onSubmit={handleSubmit} autoComplete="off">
                    <MyTextInput  name="email" placeholder="Email"/>
                    <MyTextInput name="password" placeholder="Password" type='password'/>
                    <ErrorMessage
                       name="error" render={() => <Label style={{marginBottom: 10}} content={errors.error} />}
                    />
                    <Button loading={isSubmitting} className="button-68" type="submit" content="Login" fluid />
                </Form>
            )} 
        </Formik>
    )
})

// obs. no loading indicator is needed when using an isSubmiting attribute with formik. The library will recognize on its 
// own when to set the value of isSubmitting to true, after the handleSubmit finished its execution
// besides the form values, we could use the setError method- Formik specific function that allows us to display errors directly inside our form
