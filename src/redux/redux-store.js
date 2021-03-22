import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import postPageReducer from "./postsPage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    postsPage: postPageReducer,
    messagesPage: messagesPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    init: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
//let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
