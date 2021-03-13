import {combineReducers, createStore} from "redux";
import postPageReducer from "./postsPage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    postsPage: postPageReducer,
    messagesPage: messagesPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(reducers)


export default store