import React from 'react'
import classes from "./Users.module.css";
import defaultUser from "../../../assets/images/defaultUser.png";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../api/api";


const Users = (props) => {

    let countPages = Math.ceil(props.totalUsersCount / props.pageSize)
    countPages = countPages >= 10 ? 10 : countPages
    let pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span onClick={(e) => props.onPageChanged(p)}
                              className={(props.currentPage === p)
                                  ? [classes.pagination, classes.paginationActive].join(' ')
                                  : classes.pagination}>
                                {p}
                        </span>
                    )
                })}
            </div>
            {props.users.map((u) => {
                return (

                    <div key={u.id} className={classes.wrapper}>
                        <NavLink to={'/profile/' + u.id}>
                            <div className={classes.avatarContainer}>
                                <img src={u.photos.small ? u.photos.small : defaultUser} alt="user avatar"/>
                            </div>
                        </NavLink>

                        <div className={classes.userInfo}>
                            <div className={classes.userName}>
                                {u.name}
                            </div>
                            <div className={classes.userStatus}>
                                {u.status}
                            </div>
                            <div className={classes.followButtonWrap}>
                                {u.followed
                                    ? <button disabled={props.fetchingProcess.some(id => id == u.id)}
                                              className={[classes.button, classes.unfollow].join(' ')}
                                              onClick={() => props.unFollowThunk(u.id)}>Unfollow</button>
                                    : <button disabled={props.fetchingProcess.some(id => id == u.id)}
                                              className={[classes.button, classes.follow].join(' ')}
                                              onClick={() => props.followThunk(u.id)}>Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users