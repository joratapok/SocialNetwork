import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sideBarReducer from './sideBar-reducer'
import usersPageReducer from './usersPage-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import chatReducer from './chat-reducer'

const rootReducer = combineReducers({
    postsPage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    init: appReducer,
    chat: chatReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.__store__ = store

export default store
