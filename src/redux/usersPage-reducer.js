const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SHOW_PROGRESS_BAR = 'SHOW_PROGRESS_BAR'

let initial = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    inProgress: true,
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

        default :
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (numPage) => ({type: SET_CURRENT_PAGE, page: numPage})
export const setTotalUsersCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount})
export const showProgressBarAC = (show) => ({type: SHOW_PROGRESS_BAR, show: show})

export default usersPageReducer