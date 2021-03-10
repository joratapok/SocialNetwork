export const add_message = 'ADD-MESSAGE'
export const rec_message_area = 'REC-MESSAGE-AREA'

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
    postNewMessage: ''
}

const messagesPageReducer = (state = initial, action) => {
    switch (action.type) {
        case (add_message) :
            let newMessageObj = {id: 3, message: state.postNewMessage}
            return {
                ...state,
                dialogs: [...state.dialogs, newMessageObj],
                postNewMessage: '',
            }
        case (rec_message_area) :
            return {
                ...state,
                postNewMessage: action.newMessage,
            }
        default :
            return state
    }
}

export const changeAreaMessageActionCreator = (text) => ({type: rec_message_area, newMessage: text})
export const addNewMessageActionCreator = () => ({type: add_message })

export default messagesPageReducer