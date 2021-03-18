import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required, moreThan30} from "../../../utils/validators/validator";
import {Input} from "../../common/formsControl/FormsControl";
import classes from "./Login.module.css"
import Button from "./button/Button";

let LoginForm = (props) => {

    return (
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field placeholder={'email'} type={'email'}
                    name={'email'} validate={[required, moreThan30]}
                    component={Input}/>
                </div>
                <div>
                    <Field type={'password'} name={'password'} placeholder={'password'}
                    validate={[required, moreThan30]} component={Input}/>
                </div>
                <Field type='hidden' name='rememberMe' value='1' component={'input'}/>
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
            <LoginForm onSubmit={props.onSubmit} />
        </div>
    )
}
export default Login
