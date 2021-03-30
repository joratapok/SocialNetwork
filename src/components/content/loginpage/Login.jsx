import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required, moreThan30} from "../../../utils/validators/validator";
import {HiddenInput, Input} from "../../common/formsControl/FormsControl";
import classes from "./Login.module.css"
import Button from "./button/Button";

let LoginForm = ({initialValues, handleSubmit, error}) => {

    return (
            <form onSubmit={ handleSubmit }>
                <div className={classes.inputWrapper}>
                    <Field placeholder={'email'} type={'email'}
                    name={'email'} validate={[required, moreThan30]}
                    component={Input}/>
                </div>
                <div className={classes.inputWrapper}>
                    <Field type={'password'} name={'password'} placeholder={'password'}
                    validate={[required,]} component={Input}/>
                </div>
                <Field name={'rememberMe'} component={HiddenInput}/>

                {(error &&
                <div className={classes.errorWrapper}>
                    <div className={classes.errorField}>
                      {error}
                    </div>
                </div>)}

                <div className={classes.buttonWrapper}>
                    <Button />
                </div>

            </form>
    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {

    return (
        <div className={classes.loginWrap}>
            <div className={classes.title}>Login Page</div>
            <div>
                <p>Test account </p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>

            <LoginForm onSubmit={props.onSubmit} />
        </div>
    )
}
export default Login
