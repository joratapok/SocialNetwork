import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required, moreThan30} from "../../../utils/validators/validator";
import {HiddenInput, Input} from "../../common/formsControl/FormsControl";
import classes from "./Login.module.css"
import Button from "./button/Button";
import reload from "../../../assets/images/reload.png"

let LoginForm = ({handleSubmit, error, captcha, getCaptcha}) => {

    return (
        <form onSubmit={handleSubmit}>

            <Field name={'rememberMe'} component={HiddenInput}/>

            <div className={classes.inputWrapper}>
                <Field placeholder={'email'} type={'email'}
                       name={'email'} validate={[required, moreThan30]}
                       component={Input}/>
            </div>

            <div className={classes.inputWrapper}>
                <Field type={'password'} name={'password'} placeholder={'password'}
                       validate={[required,]} component={Input}/>
            </div>

            {
                (captcha && <div className={classes.captchaWrapper}>
                    <img className={classes.reload} onClick={getCaptcha} src={reload} alt="reload"/>

                    <div className={classes.captcha}>
                        <img className={classes.captchaImage} src={captcha} alt="captcha"/>
                    </div>
                    <div className={classes.captchaInputWrapper}>
                        <Field type={'text'} name={'captcha'} placeholder={'captcha'}
                               validate={[required,]} component={Input}/>
                    </div>
                </div>)
            }

            {(error &&
                <div className={classes.errorWrapper}>
                    <div className={classes.errorField}>
                        {error}
                    </div>
                </div>)}

            <div className={classes.buttonWrapper}>
                <Button/>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    let initialValues = {email: 'free@samuraijs.com', password: 'free', rememberMe: true}

    return (
        <div className={classes.loginWrap}>
            <div className={classes.title}>Login Page</div>
            <div>
                <p>Test account </p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>

            <LoginForm initialValues={initialValues}
                       onSubmit={props.onSubmit}
                       captcha={props.captcha}
                       getCaptcha={props.getCaptcha}/>
        </div>
    )
}
export default Login
