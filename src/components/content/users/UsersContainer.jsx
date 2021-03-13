import React from 'react'
import {connect} from "react-redux";
import {
    changefetchingProcess,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUser,
    showProgressBar,
    unFollow
} from "../../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../../preloader/Preloader";
import {usersApi} from "../../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.showProgressBar(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.showProgressBar(false)
                this.props.setUser(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanged = (numPage) => {
        this.props.setCurrentPage(numPage)
        this.props.showProgressBar(true)
        usersApi.getUsers(numPage, this.props.pageSize).then(response => {
                this.props.showProgressBar(false)
                this.props.setUser(response.items)
            })
    }

    render = () => {
        return <>
            {this.props.usersPage.inProgress ? <Preloader/> : null}
            <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                   pageSize={this.props.usersPage.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.usersPage.currentPage}
                   users={this.props.usersPage.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   fetchingProcess={this.props.usersPage.fetchingProcess}
                   changefetchingProcess={this.props.changefetchingProcess}
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

let dispatch = {follow, unFollow, setUser, setCurrentPage, setTotalUsersCount, showProgressBar, changefetchingProcess}

const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIComponent)

export default UsersContainer