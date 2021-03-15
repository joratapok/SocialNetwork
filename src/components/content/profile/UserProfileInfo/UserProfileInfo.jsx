import React from 'react';
import Preloader from "../../../preloader/Preloader";
import ProfileStatus from "./profileStatus/ProfileStatus";


const UserProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return(
        <div>
            <span>{props.profileInfo.fullName}</span>

            <img src={props.profileInfo.photos.large}/>
            <ProfileStatus aboutMe={props.profileInfo.aboutMe}/>
        </div>
    )
}




export default UserProfileInfo;