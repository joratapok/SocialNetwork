import {ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {showErrorMessageThunk} from "./app-reducer";
import {photosType, postsType, userType} from "../types/types";
import {actions} from "./usersPage-reducer";
import {profileApi} from "../api/profileApi";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";

export const ADD_POST = 'SN/PROFILE/ADD_POST'
export const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE'
export const SET_STATUS = 'SN/PROFILE/SET_STATUS'
export const SET_PHOTO = 'SN/PROFILE/SET_PHOTO'
export const CLEAR_USER_INFO = 'SN/PROFILE/CLEAR_USER_INFO'

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
export type ProfileReducerActionsTypes = InferActionsTypes<typeof actionsProfileReducer>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ProfileReducerActionsTypes>

const postPageReducer = (state = initial, action: ProfileReducerActionsTypes): initialType => {
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

export const actionsProfileReducer = {
    addNewPost: (post: string) => ({type: ADD_POST, post} as const),
    setUserProfile: (user: userType) => ({type: SET_USER_PROFILE, user} as const),
    setStatus: (text: string) => ({type: SET_STATUS, text} as const),
    setPhoto: (photo: photosType) => ({type: SET_PHOTO, photo} as const),
    clearUserInfo: () => ({type: CLEAR_USER_INFO,} as const),
}

export const getProfile = (userId: number | null): ThunkType => {
    return async (dispatch) => {
        try {
            actions.showProgressBar(true)
            let response = await profileApi.getProfile(userId)
            dispatch(actionsProfileReducer.setUserProfile(response.data))
            actions.showProgressBar(false)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
            actions.showProgressBar(false)
        }

    }
}

export const getStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            let response = await profileApi.getStatus(userId)
            dispatch(actionsProfileReducer.setStatus(response))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}

export const setProfileStatus = (text: string): ThunkType => {
    return async (dispatch) => {
        try {
            let response = await profileApi.putStatus(text)
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(actionsProfileReducer.setStatus(text))
            }
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}
export const savePhoto = (file: any): ThunkType => {
    return async (dispatch) => {
        actions.showProgressBar(true)
        try {
            const response = await profileApi.putPhoto(file)
            if (response.resultCode == ResultCodesEnum.Success) {
                dispatch(actionsProfileReducer.setPhoto(response.data.photos))
            }
            actions.showProgressBar(false)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
            actions.showProgressBar(false)
        }
    }
}

export const saveProfile = (user: userType): ThunkType => {
    return async (dispatch, getState) => {
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
