import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required, moreThan30} from "../../../utils/validators/validator";
import {HiddenInput, Input} from "../../common/formsControl/FormsControl";
import classes from "./Login.module.css"
import Button from "./button/Button";
import reload from "../../../assets/images/reload.png"
import {LoginFormDataType} from "../../../redux/auth-reducer";

type LoginFormOwnProps = {
    captcha: null | string
    getCaptcha: () => void
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error, captcha, getCaptcha}) => {

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
                    <img className={classes.reload} onClick={() => getCaptcha()} src={reload} alt="reload"/>

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

const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type PropsType = {
    onSubmit: (data: LoginFormDataType) => void
    captcha: null | string
    getCaptcha: () => void
}

const Login: React.FC<PropsType> =
    ({onSubmit, captcha, getCaptcha}) => {

    type InitialValiesType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
    let initialValues:InitialValiesType = {email: 'free@samuraijs.com', password: 'free', rememberMe: true}

    return (
        <div className={classes.loginWrap}>
            <div className={classes.title}>Login Page</div>
            <div>
                <p>Test account </p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>

            <LoginReduxForm initialValues={initialValues}
                       onSubmit={onSubmit}
                       captcha={captcha}
                       getCaptcha={getCaptcha}/>
        </div>
    )
}
export default Login
