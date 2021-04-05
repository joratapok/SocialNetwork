import React from 'react';
import classes from './Profile.module.css'
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";
import {userType} from "../../../types/types";
import {authReducerType} from "../../../redux/auth-reducer";

type PropsType = {
    profileInfo: userType
    isOwner: boolean
    auth: () => void
    status: string
    savePhoto: (file: any) => void
    saveProfile: (user: userType) => Promise<void>
}

const Profile: React.FC<PropsType> = ({
                                          profileInfo,
                                          isOwner,
                                          savePhoto,
                                          auth,
                                          saveProfile,
                                          status
                                      }) => {
    return (
        <div className={classes.wrapper}>
            <UserProfileInfo profileInfo={profileInfo}
                             isOwner={isOwner}
                             savePhoto={savePhoto}
                             auth={auth}
                             saveProfile={saveProfile}
                             status={status}/>
        </div>
    )
}

export default Profile