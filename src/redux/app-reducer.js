import {authThunk} from "./auth-reducer"

const INIT_APP = 'INIT_APP'

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
    return async (dispatch) => {
        try {
            let response = await dispatch(authThunk())
        } catch (e) {
            console.log(e)
        }
        dispatch(initApp())
    }
}

export default appReducer
