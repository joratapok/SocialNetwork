import React, {useEffect} from 'react';
import Preloader from "../../../preloader/Preloader";
import ProfileStatusContainer from "./profileStatus/ProfileStatusContainer";
import classes from './UserProfileInfo.module.css'


const UserProfileInfo = (props) => {

    useEffect(() => {

      return () => {
        props.auth()
      }
    }, [])

    if (!props.profileInfo) {
        return <Preloader/>
    }

    const PhotoSelected = (e) => {
        if (e.target.files.length === 1) {
            props.savePhoto(e.target.files[0])
        }
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.items}>
                <div className={classes.fullName}>{props.profileInfo.fullName}</div>
                {props.isOwner && <ProfileStatusContainer />}
                {!props.isOwner && <span>Status: {props.profileInfo.status}</span>}
            </div>
            <div className={classes.items}>
                <span>About me: {props.profileInfo.aboutMe}</span>
            </div>
            <div className={classes.items}>
                <span>Contacts:
                </span>
            </div>
            <div className={classes.items}>
                <span>Looking Job: {props.profileInfo.lookingForAJob}</span>
            </div>
            <div className={classes.items}>
                <span>Looking Job descriptions: {props.profileInfo.lookingForAJobDescription}</span>
            </div>


            {props.isOwner && <div>
              <input className={classes.input} id={"inputAvatar"} type={'file'} onChange={PhotoSelected}/>
                  <label for="inputAvatar">
                      <span className={classes.changeAvatar}>Change Avatar</span>
                  </label>
              </div>}
        </div>
    )
}

export default UserProfileInfo;
