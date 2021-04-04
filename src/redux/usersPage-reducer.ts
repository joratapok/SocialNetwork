import {usersApi} from "../api/api";
import {showErrorMessageThunk} from "./app-reducer";
import {photosType, usersType} from "../types/types";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {showErrorMessageType} from "./app-reducer"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SHOW_PROGRESS_BAR = 'SHOW_PROGRESS_BAR'
const TOGGLE_FETCHING_PROCESS = 'TOGGLE_FETCHING_PROCESS'


let initial = {
    users: [] as Array<usersType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    inProgress: false,
    fetchingProcess: [] as Array<number>, //arrqy of users ids
}

type initialType = typeof initial

const usersPageReducer = (state = initial, action: ActionsTypes): initialType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS :
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.page
            }

        case SET_TOTAL_USER_COUNT :
            return {
                ...state, totalUsersCount: action.totalUserCount
            }

        case SHOW_PROGRESS_BAR :
            return {
                ...state, inProgress: action.show
            }
        case TOGGLE_FETCHING_PROCESS :
            return {
                ...state, fetchingProcess: action.fetchingProcess
                    ? [...state.fetchingProcess, action.userId]
                    : state.fetchingProcess.filter(id => id != action.userId)
            }
        default :
            return state
    }
}

type ActionsTypes = FollowType | UnfollowType | SetUserType | SetCurrentPage |
    SetTotalUsersCountType | ShowProgressBarType | ChangefetchingProcessType | showErrorMessageType

type FollowType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId: number): FollowType => ({type: FOLLOW, userId})
type UnfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unFollow = (userId: number): UnfollowType => ({type: UNFOLLOW, userId})
type SetUserType = {
    type: typeof SET_USERS
    users: Array<usersType>
}
export const setUser = (users: Array<usersType>): SetUserType => ({type: SET_USERS, users})
type SetCurrentPage = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
export const setCurrentPage = (numPage: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, page: numPage})
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USER_COUNT
    totalUserCount: number
}
export const setTotalUsersCount = (totalUserCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount
})
type ShowProgressBarType = {
    type: typeof SHOW_PROGRESS_BAR
    show: boolean
}
export const showProgressBar = (show: boolean): ShowProgressBarType => ({type: SHOW_PROGRESS_BAR, show: show})
type ChangefetchingProcessType = {
    type: typeof TOGGLE_FETCHING_PROCESS
    fetchingProcess: boolean
    userId: number
}
export const changefetchingProcess = (toggle: boolean, userId: number): ChangefetchingProcessType => ({
    type: TOGGLE_FETCHING_PROCESS,
    fetchingProcess: toggle,
    userId
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const getUsersThunk = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(showProgressBar(true))
        try {
            let response = await usersApi.getUsers(currentPage, pageSize)
            dispatch(showProgressBar(false))
            dispatch(setUser(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
            dispatch(setCurrentPage(currentPage))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
            dispatch(showProgressBar(false))
        }
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number,
                                   apiMethod: any,
                                   acMethod: (userId: number) => FollowType | UnfollowType) => {
    dispatch(changefetchingProcess(true, userId))
    try {
        const data = await apiMethod(userId)
        if (data.resultCode == 0) {
            dispatch(acMethod(userId))
        }
    } catch (e) {
        //dispatch(showErrorMessageThunk(e.message))
    }
    dispatch(changefetchingProcess(false, userId))
}

export const unFollowThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await _followUnfollowFlow(dispatch, userId, usersApi.delFollow, unFollow)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}
export const followThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await _followUnfollowFlow(dispatch, userId, usersApi.postFollow, follow)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export default usersPageReducer
