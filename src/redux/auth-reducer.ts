import {authApi, ResultCodeForCaptcha, ResultCodesEnum, securityApi} from "../api/api";
import {stopSubmit} from 'redux-form'
import {clearUserInfo, getProfile} from "./profile-reducer";
import {showErrorMessageThunk} from "./app-reducer";

const SET_USER = 'SET_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

const initial = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    inProgress: false,
    captcha: null as null | string,
}

export type authReducerType = typeof initial

const authReducer = (state: authReducerType = initial, action: any): authReducerType => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }

        case LOG_OUT_USER:
            return {
                ...initial,
            }

        case SET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.URL,
            }

        default:
            return state
    }
}

type userData = {
    id: number
    email: string
    login: string
}

type setAuthUserType = {
    type: typeof SET_USER
    userData: userData
}

type logoutType = {type: typeof LOG_OUT_USER}
type setCaptchaURLType = {
    type: typeof SET_CAPTCHA_URL
    URL: string
}

export const setAuthUser = (userData: userData): setAuthUserType => ({type: SET_USER, userData})
export const logout = (): logoutType => ({type: LOG_OUT_USER})
export const setCaptchaURL = (URL: string): setCaptchaURLType => ({type: SET_CAPTCHA_URL, URL})


export const authThunk = () => {
    return async (dispatch: any) => {
        try {
            let response = await authApi.authMe()
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(setAuthUser(response.data))
                dispatch(getProfile(response.data.id))
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}

export type loginFormKeys = keyof LoginFormDataType

export const loginThunk = (data: LoginFormDataType) => {
    return async (dispatch: any) => {
        try {
            let response = await authApi.login(data)
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(authThunk())
            } else {
                if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                    dispatch(getCaptchaThunk())
                }
                const message = response.messages.length > 0
                    ? response.messages[0]
                    : "Some Error occurred"
                dispatch(stopSubmit('login', {_error: message}))
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const logoutThunk = () => {
    return async (dispatch: any) => {
        try {
            let response = await authApi.logout()
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(logout())
                dispatch(clearUserInfo())
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const getCaptchaThunk = () => {
    return async (dispatch: any) => {
        try {
            const response = await securityApi.getCaptcha()
            dispatch(setCaptchaURL(response.data.url))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export default authReducer;