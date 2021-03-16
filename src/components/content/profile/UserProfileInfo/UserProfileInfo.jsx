import React from 'react';
import Preloader from "../../../preloader/Preloader";
import ProfileStatusContainer from "./profileStatus/ProfileStatusContainer";


const UserProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return(
        <div>
            <span>{props.profileInfo.fullName}</span>

            <img src={props.profileInfo.photos.large}/>
            <ProfileStatusContainer />
        </div>
    )
}

export default UserProfileInfo;
