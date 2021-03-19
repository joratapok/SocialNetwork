import {authApi} from "../api/api";
import {stopSubmit} from 'redux-form'
import {authThunk} from "./auth-reducer"

const INIT_APP = 'INIT_APP'
const LOG_OUT_USER = 'LOG_OUT_USER'

let initial = {
    initApp: false,
}

const appReducer = (state = initial, action) => {

    switch (action.type) {
        case (INIT_APP) :
            return {
                ...state,
                initApp: true,
            }
        default :
            return state
    }
}

export const initApp = () => ({type: INIT_APP})

export const initAppThunk = () => {
    return (dispatch) => {
        dispatch(authThunk()).then(response => dispatch(initApp()))
    }
}

export default appReducer
