import {authApi} from "../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER = 'SET_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'

let initial = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    inProgress: false,
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

        default :
            return state
    }
}

export const setAuthUser = (data) => ({type: SET_USER, data})
export const logout = () => ({type: LOG_OUT_USER})


export const authThunk = () => {
    return (dispatch) => {
        return authApi.authMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUser(response.data.data))
            }
        })
    }
}

export const loginThunk = (data) => {
    return (dispatch) => {
        authApi.login(data).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                dispatch(stopSubmit('login',{_error: response.data.messages}))
            }
        })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(logout())
            }
        })
    }
}






export default authReducer
