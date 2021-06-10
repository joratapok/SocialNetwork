import { showErrorMessageThunk } from './app-reducer'
import { AppStateType, InferActionsTypes } from './redux-store'
import { ThunkAction } from 'redux-thunk'
import { chatApi, ChatMessageAPIType, ChatMessageType, StatusType } from '../api/chatApi'
import { Dispatch } from 'redux'
import { v1 } from 'uuid'

const SET_MESSAGES = 'SN/CHAT/SET_MESSAGES'
const SET_STATUS = 'SN/CHAT/SET_STATUS'

const initial = {
    messages: [] as Array<ChatMessageType>,
    status: 'pending' as StatusType
}

export type authReducerType = typeof initial
type ChatReducerActionsTypes = InferActionsTypes<typeof actionsChatReducer>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ChatReducerActionsTypes>

const chatReducer = (state: authReducerType = initial, action: ChatReducerActionsTypes): authReducerType => {
    switch (action.type) {
    case SET_MESSAGES:
        return {
            ...state,
            messages: [...state.messages, ...action.payload.messages.map(m => ({ ...m, id: v1() }))]
                .filter((m, index, arr) => index >= arr.length - 100)
        }
    case SET_STATUS:
        return {
            ...state,
            status: action.payload.status
        }

    default:
        return state
    }
}

export const actionsChatReducer = {
    messagesReceived: (messages: Array<ChatMessageAPIType>) => ({ type: SET_MESSAGES, payload: { messages } } as const),
    statusChange: (status: StatusType) => ({ type: SET_STATUS, payload: { status } } as const)
}

let _newMessageHandler: ((messages: Array<ChatMessageAPIType>) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: Array<ChatMessageAPIType>) => {
            dispatch(actionsChatReducer.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandler = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status: StatusType) => {
            dispatch(actionsChatReducer.statusChange(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListeningThunk = (): ThunkType => {
    return async (dispatch) => {
        try {
            chatApi.start()
            chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
            chatApi.subscribe('status-changed', statusChangedHandler(dispatch))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const stopMessagesListeningThunk = (): ThunkType => {
    return async (dispatch) => {
        try {
            chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
            chatApi.unsubscribe('status-changed', statusChangedHandler(dispatch))
            chatApi.stop()
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const sendMessageThunk = (message: string): ThunkType => {
    return async (dispatch) => {
        try {
            chatApi.sendMessage(message)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export default chatReducer
