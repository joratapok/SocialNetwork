export const add_message = 'ADD-MESSAGE'


let initial = {
    dialogs: [
        {id: 1, message: 'First message'},
        {id: 2, message: 'Second message v rot kompot ne pishi mne bolshe'},
        {id: 3, message: 'Third message'},
    ],
    people: [
        {id: 1, name: 'Marina'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Dmitry'},
        {id: 4, name: 'Pes'},
    ],
}

const messagesPageReducer = (state = initial, action) => {
    switch (action.type) {
        case (add_message) :
            let newMessageObj = {id: 3, message: action.message}
            return {
                ...state,
                dialogs: [...state.dialogs, newMessageObj],
            }

        default :
            return state
    }
}

export const addNewMessage = (formData) => ({type: add_message, message:formData.message })

export default messagesPageReducer
