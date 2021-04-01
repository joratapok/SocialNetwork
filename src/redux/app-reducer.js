import {authThunk} from "./auth-reducer"

const INIT_APP = 'INIT_APP'
const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'
const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE'

let initial = {
    initApp: false,
    errorMessage: null,
}

const appReducer = (state = initial, action) => {

    switch (action.type) {
        case (INIT_APP) :
            return {
                ...state,
                initApp: true,
            }
        case (SHOW_ERROR_MESSAGE) :
            return {
                ...state,
                errorMessage: action.message,
            }
        case (HIDE_ERROR_MESSAGE) :
            return {
                ...state,
                errorMessage: null,
            }
        default :
            return state
    }
}

export const initApp = () => ({type: INIT_APP})
export const showErrorMessage = (message) => ({type: SHOW_ERROR_MESSAGE, message})
export const hideErrorMessage = () => ({type: HIDE_ERROR_MESSAGE})

export const initAppThunk = () => {
    return async (dispatch) => {
        try {
            let response = await dispatch(authThunk())
        } catch (e) {
            console.log(e)
        }
        dispatch(initApp())
    }
}

export const showErrorMessageThunk = (message) => {
    return (dispatch) => {
        dispatch(showErrorMessage(message))
        setTimeout(() => {
            dispatch(hideErrorMessage())
        }, 6000)
    }
}

export default appReducer
