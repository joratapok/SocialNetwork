import {authThunk} from "./auth-reducer"
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const INIT_APP = 'INIT_APP'
const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'
const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE'

export type initialStateType = {
    initApp: boolean
    errorMessage: null | string
}

let initial: initialStateType = {
    initApp: false,
    errorMessage: null,
}

const appReducer = (state: initialStateType = initial, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case INIT_APP:
            return {
                ...state,
                initApp: true,
            }
        case SHOW_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message,
            }
        case HIDE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: null,
            }
        default :
            return state
    }
}

type initAppType = {type: typeof INIT_APP}
export type showErrorMessageType = {type: typeof SHOW_ERROR_MESSAGE, message: string}
type hideErrorMessage = {type: typeof HIDE_ERROR_MESSAGE}

type ActionsTypes = initAppType | showErrorMessageType | hideErrorMessage

export const initApp = (): initAppType => ({type: INIT_APP})
export const showErrorMessage = (message: string): showErrorMessageType => ({type: SHOW_ERROR_MESSAGE, message})
export const hideErrorMessage = (): hideErrorMessage => ({type: HIDE_ERROR_MESSAGE})

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const initAppThunk = (): ThunkType => {
    return async (dispatch) => {
        try {
            await dispatch(authThunk())
        } catch (e) {
            console.log(e)
        }
        dispatch(initApp())
    }
}

export const showErrorMessageThunk = (message: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(showErrorMessage(message))
        setTimeout(() => {
            dispatch(hideErrorMessage())
        }, 6000)
    }
}

export default appReducer
