export const ADD_MESSAGE = 'ADD-MESSAGE'

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

const messagesPageReducer = (state = initial, action: any): initialType => {
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

type addNewMessageType = {
    type: typeof ADD_MESSAGE
    message: string
}

export const addNewMessage = (message: string): addNewMessageType => ({type: ADD_MESSAGE, message })

export default messagesPageReducer
