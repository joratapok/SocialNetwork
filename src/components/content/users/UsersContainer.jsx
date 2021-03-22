import React from 'react'
import {connect} from "react-redux";
import {
    changefetchingProcess,
     followThunk, getUsersThunk,
    setCurrentPage, unFollowThunk
} from "../../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../../preloader/Preloader";
import {
    getCurrentPage,
    getFetchingProcess, getInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../redux/users-selectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (numPage) => {
        this.props.getUsersThunk(numPage, this.props.pageSize)
    }

    render = () => {
        return <>
            {this.props.inProgress ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   fetchingProcess={this.props.fetchingProcess}
                   unFollowThunk={this.props.unFollowThunk}
                   followThunk={this.props.followThunk}
                   setCurrentPage={this.props.setCurrentPage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        users: getUsers(state),
        fetchingProcess: getFetchingProcess(state),
        inProgress: getInProgress(state),
    }
}

let dispatch = {setCurrentPage, changefetchingProcess, getUsersThunk, unFollowThunk, followThunk}

const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIComponent)

export default UsersContainer
