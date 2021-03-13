import React from 'react';
import Preloader from "../../../preloader/Preloader";


const UserProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return(
        <div>
            <span>{props.profileInfo.aboutMe}</span>
            <span>{props.profileInfo.fullName}</span>
            <img src={props.profileInfo.photos.large}/>
        </div>
    )
}




export default UserProfileInfo;