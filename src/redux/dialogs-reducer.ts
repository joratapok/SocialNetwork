import {InferActionsTypes} from "./redux-store";

export const ADD_MESSAGE = 'SN/DIALOGS/ADD-MESSAGE'

type dialogType = {
    id: number
    message: string
}

type peopleType = {
    id: number
    name: string
}

let initial = {
    dialogs: [
        {id: 1, message: 'First message'},
        {id: 2, message: 'Second message v rot kompot ne pishi mne bolshe'},
        {id: 3, message: 'Third message'},
    ] as Array<dialogType>,
    people: [
        {id: 1, name: 'Marina'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Dmitry'},
        {id: 4, name: 'Pes'},
    ] as Array<peopleType>,
}

export type initialType = typeof initial
type ActionsTypes = InferActionsTypes<typeof actions>


const dialogsReducer = (state = initial, action: ActionsTypes): initialType => {
    switch (action.type) {
        case (ADD_MESSAGE) :
            let newMessageObj = {id: 3, message: action.message}
            return {
                ...state,
                dialogs: [...state.dialogs, newMessageObj],
            }
        default :
            return state
    }
}

export const actions = {
    addNewMessage: (message: string) =>
        ({type: ADD_MESSAGE, message } as const)
}




export default dialogsReducer
