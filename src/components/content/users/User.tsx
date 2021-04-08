import React from 'react'
import classes from "./Users.module.css";
import defaultUser from "../../../assets/images/defaultUser.png";
import {NavLink} from "react-router-dom";
import {usersType} from "../../../types/types";

type PropsType = {
    user: usersType
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
    fetchingProcess: Array<number>
    isAuth: boolean
}

const User: React.FC<PropsType> = ({user, fetchingProcess, unFollowThunk, followThunk, isAuth}) => {

    return (
        <div key={user.id} className={classes.wrapper}>
            <NavLink to={'/profile/' + user.id}>
                <div className={classes.avatarContainer}>
                    <img src={user.photos.small ? user.photos.small : defaultUser} alt="user avatar"/>
                </div>
            </NavLink>

            <div className={classes.userInfo}>
                <div className={classes.userName}>
                    {user.name}
                </div>
                <div className={classes.userStatus}>
                    {user.status}
                </div>
            </div>
                {isAuth
                    ? <div className={classes.followButtonWrap}>
                        {user.followed
                            ? <button disabled={fetchingProcess.some(id => id === user.id)}
                                      className={[classes.button, classes.unfollow].join(' ')}
                                      onClick={() => unFollowThunk(user.id)}>Unfollow</button>
                            : <button disabled={fetchingProcess.some(id => id === user.id)}
                                      className={[classes.button, classes.follow].join(' ')}
                                      onClick={() => followThunk(user.id)}>Follow</button>
                        }
                    </div>
                    : null
                }

        </div>
    )
}

export default User
