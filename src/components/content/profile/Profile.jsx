import React from 'react';
import classes from './Profile.module.css'
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";


const Profile = (props) => {
    return(
        <div className={classes.wrapper}>
            <UserProfileInfo profileInfo={props.profileInfo}
                             isOwner={props.isOwner}
                             savePhoto={props.savePhoto} />
        </div>
    )
}

export default Profile;
