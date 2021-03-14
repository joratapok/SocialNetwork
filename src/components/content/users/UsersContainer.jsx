import React from 'react'
import {connect} from "react-redux";
import {
    changefetchingProcess,
     followThunk, getUsersThunk,
    setCurrentPage, unFollowThunk
} from "../../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../../preloader/Preloader";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (numPage) => {
        this.props.getUsersThunk(numPage, this.props.pageSize)
    }

    render = () => {
        return <>
            {this.props.usersPage.inProgress ? <Preloader/> : null}
            <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                   pageSize={this.props.usersPage.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.usersPage.currentPage}
                   users={this.props.usersPage.users}
                   fetchingProcess={this.props.usersPage.fetchingProcess}
                   unFollowThunk={this.props.unFollowThunk}
                   followThunk={this.props.followThunk}
                   setCurrentPage={this.props.setCurrentPage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUser: (user) => {
            dispatch(setUserAC(user))
        },
        setCurrentPage: (numPage) => {
            dispatch(setCurrentPageAC(numPage))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        showProgressBar: (show) => {
            dispatch(showProgressBarAC(show))
        },
    }
}*/

let dispatch = {setCurrentPage, changefetchingProcess, getUsersThunk, unFollowThunk, followThunk}

const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIComponent)

export default UsersContainer