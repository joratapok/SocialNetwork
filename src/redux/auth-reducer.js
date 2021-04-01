import {authApi, securityApi} from "../api/api";
import {stopSubmit} from 'redux-form'
import {clearUserInfo, getProfile} from "./postsPage-reducer";
import {showErrorMessageThunk} from "./app-reducer";

const SET_USER = 'SET_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

let initial = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    inProgress: false,
    captcha: null,
}

const authReducer = (state = initial, action) => {
    window.state = state
    switch (action.type) {
        case (SET_USER) :
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case (LOG_OUT_USER) :
            return {
                ...initial,
            }

        case (SET_CAPTCHA_URL) :
            return {
                ...state,
                captcha: action.URL,
            }

        default :
            return state
    }
}

export const setAuthUser = (data) => ({type: SET_USER, data})
export const logout = () => ({type: LOG_OUT_USER})
export const setCaptchaURL = (URL) => ({type: SET_CAPTCHA_URL, URL})


export const authThunk = () => {
    return async (dispatch) => {
        try {
            let response = await authApi.authMe()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUser(response.data.data))
                dispatch(getProfile(response.data.data.id))
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}

export const loginThunk = (data) => {
    return async (dispatch) => {
        try {
            let response = await authApi.login(data)
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaThunk())
                }
                const message = response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "Some Error occurred"
                dispatch(stopSubmit('login', {_error: message}))
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}

export const logoutThunk = () => {
    return async (dispatch) => {
        try {
            let response = await authApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(logout())
                dispatch(clearUserInfo())
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const getCaptchaThunk = () => {
    return async (dispatch) => {
        try {
            const response = await securityApi.getCaptcha()
            dispatch(setCaptchaURL(response.data.url))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export default authReducer
