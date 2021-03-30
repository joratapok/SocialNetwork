import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required, moreThan30} from "../../../utils/validators/validator";
import {Input} from "../../common/formsControl/FormsControl";
import classes from "./Login.module.css"
import Button from "./button/Button";

let LoginForm = ({handleSubmit, error}) => {

    return (
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field placeholder={'email'} type={'email'}
                    name={'email'} validate={[required, moreThan30]}
                    component={Input}/>
                </div>
                <div>
                    <Field type={'password'} name={'password'} placeholder={'password'}
                    validate={[required,]} component={Input}/>
                </div>
                <Field type='hidden' name='rememberMe' value='1' component={Input}/>
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
            <div className={classes.test}>
                <p>Test account </p>
                <p>Email: paliev1@mail.ru</p>
                <p>Password: testtest</p>
            </div>

            <LoginForm onSubmit={props.onSubmit} />
        </div>
    )
}
export default Login
