import { InferActionsTypes } from './redux-store'

export const ADD_MESSAGE = 'SN/DIALOGS/ADD-MESSAGE'

export type dialogType = {
    id: number
    message: string
}

export type peopleType = {
    id: number
    name: string
}

const initial = {
    dialogs: [
        { id: 1, message: 'First message' },
        { id: 2, message: 'Second message v rot kompot ne pishi mne bolshe' },
        { id: 3, message: 'Third message' }
    ] as Array<dialogType>,
    people: [
        { id: 1, name: 'Marina' },
        { id: 2, name: 'Maksim' },
        { id: 3, name: 'Dmitry' },
        { id: 4, name: 'Pes' }
    ] as Array<peopleType>
}

export type DialogsInitialType = typeof initial
export type DialogsActionsTypes = InferActionsTypes<typeof DialogsActions>

const dialogsReducer = (state = initial, action: DialogsActionsTypes): DialogsInitialType => {
    switch (action.type) {
    case (ADD_MESSAGE) :
        // eslint-disable-next-line no-case-declarations
        const newMessageObj = { id: 3, message: action.message }
        return {
            ...state,
            dialogs: [...state.dialogs, newMessageObj]
        }
    default :
        return state
    }
}

export const DialogsActions = {
    addNewMessage: (message: string) =>
        ({ type: ADD_MESSAGE, message } as const)
}

export default dialogsReducer
