import {authApi} from "../api/api";

const SET_USER = 'SET_USER'

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

        default :
            return state
    }
}

export const setAuthUser = (data) => ({type: SET_USER, data})

export const authThunk = () => {
    return (dispatch) => {
        authApi.authMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUser(response.data.data))
            }
        })
    }
}



export default authReducer