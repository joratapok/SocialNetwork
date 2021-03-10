import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCount,
    setUserAC,
    showProgressBarAC,
    unFollowAC
} from "../../../redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../preloader/Preloader";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.showProgressBar(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.showProgressBar(false)
                this.props.setUser(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (numPage) => {
        this.props.setCurrentPage(numPage)
        this.props.showProgressBar(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.showProgressBar(false)
                this.props.setUser(response.data.items)
            })
    }

    render = () => {
        return <>
        {this.props.usersPage.inProgress ? <Preloader /> : null}
        <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                      pageSize={this.props.usersPage.pageSize}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.usersPage.currentPage}
                      users={this.props.usersPage.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
        />
        </>
    }
}

let mapStateToProps =  (state) => {
    return {
        usersPage: state.usersPage,
    }
}

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
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer