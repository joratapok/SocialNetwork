import { createSelector } from 'reselect'
import { AppStateType } from './redux-store'

export const getInProgress = (state: AppStateType) => {
    return state.usersPage.inProgress
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
})

export const getFetchingProcess = (state: AppStateType) => {
    return state.usersPage.fetchingProcess
}

export const getisAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const getFilter = (state: AppStateType) => {
    return state.usersPage.filter
}
