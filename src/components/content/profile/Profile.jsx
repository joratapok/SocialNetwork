import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from "../myPosts/MyPostsContainer";
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";


const Profile = (props) => {
    return(
        <div className={classes.wrapper}>
            <UserProfileInfo profileInfo={props.profileInfo} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
