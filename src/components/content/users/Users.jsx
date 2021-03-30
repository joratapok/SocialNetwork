import React from 'react'
import classes from "./Users.module.css";
import defaultUser from "../../../assets/images/defaultUser.png";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../api/api";
import Paginator from "./paginator/Paginator"
import User from "./User"


const Users = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged, users,
                   unFollowThunk, followThunk, fetchingProcess, isAuth, ...props
               }) => {

    return (
        <div>
            <Paginator totalItems={totalUsersCount}
                       pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map((u) => {
                return <User user={u} key={u.id}
                             unFollowThunk={unFollowThunk}
                             followThunk={followThunk}
                             fetchingProcess={fetchingProcess}
                             isAuth={isAuth}/>
            })}
        </div>
    )
}

export default Users
