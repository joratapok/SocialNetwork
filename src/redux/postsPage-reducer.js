import {profileApi} from "../api/api";
import {showProgressBar} from "./usersPage-reducer";


export const ADD_POST = 'ADD_POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
export const SET_PHOTO = 'SET_PHOTO'
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO'



let initial = {
    posts: [
        {
            id: 1,
            post: 'Hi. I glad to see you in my home page. I hope that you feel yourself good and your mood want to dance',
            like: 0
        },
        {id: 2, post: 'It\'s my first post', like: 0},
    ],
    inProgress: false,
    user: {
      aboutMe: null,
      contacts: null,
      fullName: null,
      lookingForAJob: false,
      lookingForAJobDescription: null,
      photos: {small: null, large: null},
      userId: null,
    }

}

const postPageReducer = (state = initial, action) => {
    switch (action.type) {
        case (ADD_POST) :
            let newObj = {
                id: 3,
                post: action.post,
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newObj],
            }

        case (SET_USER_PROFILE) :
            return {
                ...state, user: action.user
            }

        case (SET_STATUS) :
            return {
                ...state, status: action.text
            }
        case (SET_PHOTO) :
            return {
                ...state, user: {...state.user,  photos: action.photo}
            }
        case (CLEAR_USER_INFO) :
            return {
                ...state, user: {...initial.user}
            }
        default :
            return state
    }
}

export const addNewPost = (post) => ({type: ADD_POST, post: post})
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, user})
export const setStatus = (text) => ({type: SET_STATUS, text})
export const setPhoto = (photo) => ({type: SET_PHOTO, photo})
export const clearUserInfo = () => ({type: CLEAR_USER_INFO, })

export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const setProfileStatus = (text) => {
    return async (dispatch) => {
        let response = await profileApi.putStatus(text)
        if (response.data.resultCode == 0) {
            dispatch(setStatus(text))
        }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        //showProgressBar(true)
        let response = await profileApi.putPhoto(file)
        if (response.data.resultCode == 0) {
            dispatch(setPhoto(response.data.data.photos))
        }
        //showProgressBar(false)
    }
}


export default postPageReducer
