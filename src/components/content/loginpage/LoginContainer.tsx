import React from 'react';
import {connect} from "react-redux";
import {loginThunk, getCaptchaThunk, LoginFormDataType} from "../../../redux/auth-reducer";
import Login from "./Login"
import {Redirect} from "react-router-dom/";
import {AppStateType} from "../../../redux/redux-store";

type MapsStatePorpsType = {
    auth: boolean
    captcha: null | string
}

type MapDispatchPropsType = {
    loginThunk: (data: LoginFormDataType) => void
    getCaptchaThunk: () => void
}

type MapOwnPropsType = {}

type PropsType = MapsStatePorpsType & MapDispatchPropsType & MapOwnPropsType

const LoginContainer: React.FC<PropsType> = ({getCaptchaThunk, loginThunk, auth, captcha}) => {

    const getCaptcha = () => {
        getCaptchaThunk()
    }

    const onSubmit = (data: LoginFormDataType) => {
        loginThunk(data)
    }

    if (auth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Login onSubmit={onSubmit}
               captcha={captcha}
               getCaptcha={getCaptcha}/>
    )

}

let mapStateToProps = (state: AppStateType): MapsStatePorpsType => ({
    auth: state.auth.isAuth,
    captcha: state.auth.captcha,
})

export default connect(mapStateToProps, {loginThunk, getCaptchaThunk})(LoginContainer)
