import {ResultCodeForCaptcha, ResultCodesEnum} from "../api/api";
import {stopSubmit} from 'redux-form'
import {clearUserInfo, getProfile} from "./profile-reducer";
import {showErrorMessageThunk} from "./app-reducer";
import {securityApi} from "../api/securityApi";
import {authApi} from "../api/authApi";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USER = 'SN/AUTH/SET_USER'
const LOG_OUT_USER = 'SN/AUTH/LOG_OUT_USER'
const SET_CAPTCHA_URL = 'SN/AUTH/SET_CAPTCHA_URL'

const initial = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    inProgress: false,
    captcha: null as null | string,
}

export type authReducerType = typeof initial
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

const authReducer = (state: authReducerType = initial, action: ActionsTypes): authReducerType => {
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

export const actions = {
    setAuthUser: (userData: userData) => ({type: SET_USER, userData} as const),
    logout: () => ({type: LOG_OUT_USER} as const),
    setCaptchaURL: (URL: string) => ({type: SET_CAPTCHA_URL, URL} as const),
}

export const authThunk = (): ThunkType => {
    return async (dispatch: any) => {
        try {
            let response = await authApi.authMe()
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(actions.setAuthUser(response.data))
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

export const loginThunk = (data: LoginFormDataType): ThunkType => {
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

export const logoutThunk = (): ThunkType => {
    return async (dispatch: any) => {
        try {
            let response = await authApi.logout()
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(actions.logout())
                dispatch(clearUserInfo())
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const getCaptchaThunk = (): ThunkType => {
    return async (dispatch: any) => {
        try {
            const response = await securityApi.getCaptcha()
            dispatch(actions.setCaptchaURL(response.data.url))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export default authReducer;