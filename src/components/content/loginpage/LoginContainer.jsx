import React from 'react';
import {connect} from "react-redux";
import {loginThunk, getCaptchaThunk} from "../../../redux/auth-reducer";
import Login from "./Login"
import Redirect from "react-router-dom/es/Redirect";

class LoginContainer extends React.Component {

    initialValues = {rememberMe: true}

    onSubmit = (data) => {
        this.props.loginThunk(data)
    }

    render() {
        if (this.props.auth) {
            return <Redirect to={'/profile'}/>
        }

        return (
            <Login onSubmit={this.onSubmit}
                   initialValues={this.initialValues}
                   captcha={this.props.captcha}
                   getCaptcha={this.props.getCaptchaThunk}/>
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.postsPage.status,
    auth: state.auth.isAuth,
    captcha: state.auth.captcha,
})


export default connect(mapStateToProps, {loginThunk, getCaptchaThunk})(LoginContainer)
