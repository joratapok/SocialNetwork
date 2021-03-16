import React from 'react'
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field placeholder={'login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const onSubmit = (formData) => {
    console.log(formData)
}

const Login = () => {
    return (
        <div>
            <div>Login Page</div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login