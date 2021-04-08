import {showErrorMessageThunk} from "./app-reducer";
import {usersType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {usersApi} from "../api/usersApi";


const FOLLOW = 'SN/USERS/FOLLOW'
const UNFOLLOW = 'SN/USERS/UNFOLLOW'
const SET_USERS = 'SN/USERS/SET_USERS'
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SN/USERS/SET_TOTAL_USER_COUNT'
const SHOW_PROGRESS_BAR = 'SN/USERS/SHOW_PROGRESS_BAR'
const TOGGLE_FETCHING_PROCESS = 'SN/USERS/TOGGLE_FETCHING_PROCESS'


let initial = {
    users: [] as Array<usersType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    inProgress: false,
    fetchingProcess: [] as Array<number>, //arrqy of users ids
}

type initialType = typeof initial
export type UsersActionsTypes = InferActionsTypes<typeof actions>

const usersPageReducer = (state = initial,
                          action: UsersActionsTypes): initialType => {
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
                    : state.fetchingProcess.filter(id => id !== action.userId)
            }
        default :
            return state
    }
}

export const actions = {
    follow: (userId: number) => ({type: FOLLOW, userId} as const),
    unFollow: (userId: number) => ({type: UNFOLLOW, userId} as const),
    setUser: (users: Array<usersType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (numPage: number) => ({type: SET_CURRENT_PAGE, page: numPage} as const),
    setTotalUsersCount: (totalUserCount: number) => ({
        type: SET_TOTAL_USER_COUNT,
        totalUserCount
    } as const),
    showProgressBar: (show: boolean) => ({type: SHOW_PROGRESS_BAR, show: show} as const),
    changefetchingProcess: (toggle: boolean, userId: number) => ({
        type: TOGGLE_FETCHING_PROCESS,
        fetchingProcess: toggle,
        userId
    } as const),
}




type ThunkType = ThunkAction<Promise<void>, AppStateType, any, UsersActionsTypes>

export const getUsersThunk = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.showProgressBar(true))
        try {
            let response = await usersApi.getUsers(currentPage, pageSize)
            dispatch(actions.showProgressBar(false))
            dispatch(actions.setUser(response.items))
            dispatch(actions.setTotalUsersCount(response.totalCount))
            dispatch(actions.setCurrentPage(currentPage))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
            dispatch(actions.showProgressBar(false))
        }
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<UsersActionsTypes>,
                                   userId: number,
                                   apiMethod: any,
                                   acMethod: (userId: number) => UsersActionsTypes) => {
    dispatch(actions.changefetchingProcess(true, userId))
    try {
        const data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(acMethod(userId))
        }
    } catch (e) {
        //dispatch(showErrorMessageThunk(e.message))
    }
    dispatch(actions.changefetchingProcess(false, userId))
}

export const unFollowThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await _followUnfollowFlow(dispatch, userId, usersApi.delFollow, actions.unFollow)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}
export const followThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await _followUnfollowFlow(dispatch, userId, usersApi.postFollow, actions.follow)
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export const toggleInProgressThunk = (toggle: boolean) => {
    return  (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(actions.showProgressBar(toggle))
    }
}

export default usersPageReducer
