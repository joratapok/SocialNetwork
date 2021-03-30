import {createSelector} from "reselect";

export const getInProgress = (state) => {
    return state.usersPage.inProgress
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users
})

export const getFetchingProcess = (state) => {
    return state.usersPage.fetchingProcess
}

export const getisAuth = (state) => {
    return state.auth.isAuth
}
