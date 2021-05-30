import React from 'react'
import {connect} from "react-redux";
import {
    FilterType,
    followThunk, getUsersThunk,
    unFollowThunk
} from "../../../redux/usersPage-reducer";
import Users from "./Users";
import {
    getCurrentPage,
    getFetchingProcess, getFilter, getInProgress, getisAuth,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../redux/users-selectors";
import {usersType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    inProgress: boolean
    totalUsersCount: number
    users: Array<usersType>
    fetchingProcess: Array<number>
    isAuth: boolean
    filter: FilterType
}

type MapDispatchPropsType = {
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
    getUsersThunk: (currentPage: number, pageSize: number, filter: FilterType) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    onPageChanged = (numPage: number) => {
        this.props.getUsersThunk(numPage, this.props.pageSize, this.props.filter)
    }

    onFilterChanged = (filter: FilterType) => {
        this.props.getUsersThunk(1, this.props.pageSize, filter)
    }

    render = () => {
        return <>

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   onFilterChanged={this.onFilterChanged}
                   users={this.props.users}
                   fetchingProcess={this.props.fetchingProcess}
                   unFollowThunk={this.props.unFollowThunk}
                   followThunk={this.props.followThunk}
                   isAuth={this.props.isAuth}

            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        users: getUsers(state),
        fetchingProcess: getFetchingProcess(state),
        inProgress: getInProgress(state),
        isAuth: getisAuth(state),
        filter: getFilter(state),
    }
}

let dispatch = { getUsersThunk, unFollowThunk, followThunk}

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>

const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, dispatch)(UsersAPIComponent)

export default UsersContainer
