import React from 'react'
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {

    return (
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field placeholder={'email'} type={'email'} name={'email'} component={'input'}/>
                </div>
                <div>
                    <Field maxlength={'99'} minlength={'6'}
                    type={'password'} name={'password'} placeholder={'password'}
                    component={'input'}/>
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

LoginForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {

  const onSubmit = (formData) => {
      console.log(formData)
  }

    return (
        <div>
            <div>Login Page</div>
            <LoginForm onSubmit={props.onSubmit} />
        </div>
    )
}
export default Login
