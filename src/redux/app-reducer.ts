import {authThunk} from "./auth-reducer"
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";

const INIT_APP = 'SN/APP/INIT_APP'
const SHOW_ERROR_MESSAGE = 'SN/APP/SHOW_ERROR_MESSAGE'
const HIDE_ERROR_MESSAGE = 'SN/APP/HIDE_ERROR_MESSAGE'

let initialState = {
    initApp: false,
    errorMessage: null as null | string,
}

type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

const appReducer = (state= initialState,
                    action: ActionsTypes): initialStateType => {

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

export const actions = {
    initApp: () => ({type: INIT_APP} as const),
    showErrorMessage: (message: string) => ({type: SHOW_ERROR_MESSAGE, message} as const),
    hideErrorMessage: () => ({type: HIDE_ERROR_MESSAGE} as const),
}

export const initAppThunk = (): ThunkType => {
    return async (dispatch) => {
        try {
            await dispatch(authThunk())
        } catch (e) {
            console.log(e)
        }
        dispatch(actions.initApp())
    }
}

export const showErrorMessageThunk = (message: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(actions.showErrorMessage(message))
        setTimeout(() => {
            dispatch(actions.hideErrorMessage())
        }, 6000)
    }
}

export default appReducer
