import {usersApi} from "../api/api";
import {showErrorMessageThunk} from "./app-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SHOW_PROGRESS_BAR = 'SHOW_PROGRESS_BAR'
const TOGGLE_FETCHING_PROCESS = 'TOGGLE_FETCHING_PROCESS'

let initial = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    inProgress: false,
    fetchingProcess: [],
}

const usersPageReducer = (state = initial, action) => {
    switch (action.type) {
        case (FOLLOW) :
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case (UNFOLLOW) :
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case (SET_USERS) :
            return {
                ...state, users: action.users
            }

        case (SET_CURRENT_PAGE) :
            return {
                ...state, currentPage: action.page
            }

        case (SET_TOTAL_USER_COUNT) :
            return {
                ...state, totalUsersCount: action.totalUserCount
            }

        case (SHOW_PROGRESS_BAR) :
            return {
                ...state, inProgress: action.show
            }
        case (TOGGLE_FETCHING_PROCESS) :
            return {
                ...state, fetchingProcess: action.fetchingProcess
                    ? [...state.fetchingProcess, action.userId]
                    : state.fetchingProcess.filter(id => id != action.userId)
            }
        default :
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUser = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (numPage) => ({type: SET_CURRENT_PAGE, page: numPage})
export const setTotalUsersCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount})
export const showProgressBar = (show) => ({type: SHOW_PROGRESS_BAR, show: show})
export const changefetchingProcess = (toggle, userId) => ({
    type: TOGGLE_FETCHING_PROCESS,
    fetchingProcess: toggle,
    userId
})

export const getUsersThunk = (currentPage, pageSize) => {
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

const followUnfollowFlow = (userId, apiMethod, acMethod) => {
    return async (dispatch) => {
        dispatch(changefetchingProcess(true, userId))
        try {
            const data = await apiMethod(userId)
            if (data.resultCode == 0) {
                dispatch(acMethod(userId))
            }

        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
        dispatch(changefetchingProcess(false, userId))
    }
}

export const unFollowThunk = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(followUnfollowFlow(userId, usersApi.delFollow, unFollow))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }

    }
}
export const followThunk = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(followUnfollowFlow(userId, usersApi.postFollow, follow))
        } catch (e) {
            dispatch(showErrorMessageThunk(e.message))
        }
    }
}

export default usersPageReducer
