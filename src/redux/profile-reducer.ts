import {profileApi, ResultCodesEnum} from "../api/api";
import {showProgressBar} from "./usersPage-reducer";
import {stopSubmit} from "redux-form";
import {showErrorMessageThunk} from "./app-reducer";
import {photosType, postsType, userType} from "../types/types";


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
            likesCount: 0
        },
        {id: 2, post: 'It\'s my first post', likesCount: 0},
    ] as Array<postsType>,
    inProgress: false,
    status: '' as string,
    user: {
        aboutMe: null,
        contacts: {
            facebook: null, website: null,
            vk: null, twitter: null, instagram: null,
            youtube: null, github: null, mainLink: null,
        },
        fullName: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {small: null, large: null},
        userId: null,
    } as userType
}

export type initialType = typeof initial

const postPageReducer = (state = initial, action: any): initialType => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 3,
                post: action.post,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USER_PROFILE :
            return {
                ...state, user: action.user
            }

        case SET_STATUS :
            return {
                ...state, status: action.text
            }
        case SET_PHOTO :
            return {
                ...state, user: {...state.user, photos: action.photo}
            }
        case CLEAR_USER_INFO :
            return {
                ...state, user: {...initial.user}
            }
        default :
            return state
    }
}

type addNewPostType = {
    type: typeof ADD_POST
    post: string
}
export const addNewPost = (post: string): addNewPostType => ({type: ADD_POST, post})
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    user: userType
}
export const setUserProfile = (user: userType): setUserProfileType => ({type: SET_USER_PROFILE, user})
type setStatus = {
    type: typeof SET_STATUS
    text: string
}
export const setStatus = (text: string): setStatus => ({type: SET_STATUS, text})
type setPhotoType = {
    type: typeof SET_PHOTO
    photo: photosType
}
export const setPhoto = (photo: photosType): setPhotoType => ({type: SET_PHOTO, photo})
type clearUserInfoType = { type: typeof CLEAR_USER_INFO }
export const clearUserInfo = (): clearUserInfoType => ({type: CLEAR_USER_INFO,})

export const getProfile = (userId: number) => {
    return async (dispatch: any) => {
        let response = await profileApi.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: any) => {
        try {
            let response = await profileApi.getStatus(userId)
            dispatch(setStatus(response))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}

export const setProfileStatus = (text: string) => {
    return async (dispatch: any) => {
        try {
            let response = await profileApi.putStatus(text)
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(setStatus(text))
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}
export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        showProgressBar(true)
        try {
            const response = await profileApi.putPhoto(file)
            if (response.resultCode == ResultCodesEnum.Success) {
                dispatch(setPhoto(response.data))
            }
            showProgressBar(false)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
            showProgressBar(false)
        }
    }
}

export const saveProfile = (user: userType) => {
    return async (dispatch: any, getState: any) => {
        const userId = getState().auth.id
        try {
            let response = await profileApi.saveProfile(user)
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(getProfile(userId))
            } else {
                dispatch(stopSubmit('editProfile', {_error: response.messages[0]}))
                //dispatch(stopSubmit('editProfile', {"contacts": {"facebook": response.data.messages[0]}}))
                return Promise.reject(response.messages[0])
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}


export default postPageReducer
