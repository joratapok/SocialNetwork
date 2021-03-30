import React, {useEffect, useState} from 'react';
import Preloader from "../../../preloader/Preloader";
import ProfileStatusContainer from "./profileStatus/ProfileStatusContainer";
import classes from './UserProfileInfo.module.css'
import Contacts from "./contacts/Contacts";
import ProfileFormData from "./profileFormData/ProfileFormData";
import CancelButton from "./profileFormData/cancelButton/CancelButton";
import Button from "./button/Button";


const UserProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        return () => {
            props.auth()
        }
    }, [])

    const onSubmit = (formdata) => {
        props.saveProfile(formdata).then(
            () => {
                setEditMode(false)
            }
        )
    }

    if (!props.profileInfo) {
        return <Preloader/>
    }

    const PhotoSelected = (e) => {
        if (e.target.files.length === 1) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.items}>
                <div className={classes.fullNameWrapper}>
                    <div className={classes.fullName}>{props.profileInfo.fullName}</div>
                    {props.isOwner && <ProfileStatusContainer/>}
                    {!props.isOwner && <div className={classes.alienStatus}>
                        Status: {props.profileInfo.status}</div>}
                </div>

            </div>

            {editMode
                ? <ProfileFormData  initialValues={props.profileInfo}
                                    setEditMode={() => {setEditMode(false)}}
                                    onSubmit={onSubmit}
                                    setEditModeOff={() => {setEditMode(false)}} />
                : <ProfileData profileInfo={props.profileInfo}
                               isOwner={props.isOwner}
                               setEditModeOn={() => {setEditMode(true)}} />
            }

            {props.isOwner && <div>
                <input className={classes.input} id={"inputAvatar"} type={'file'} onChange={PhotoSelected}/>
                <label for="inputAvatar">
                    <span className={classes.changeAvatar}>Change Avatar</span>
                </label>
            </div>}
        </div>
    )
}

const ProfileData = (props) => {
    return <div >
        <div className={classes.items}>
            <span className={classes.label}>About me:</span>
            <div className={classes.labelItem}>{props.profileInfo.aboutMe}</div>
        </div>
        <div className={classes.items}>
            <span className={classes.label}>Looking Job:</span>
            <div className={classes.labelItem}>{props.profileInfo.lookingForAJob ? "Yes" : "No"}</div>
        </div>
        <div className={classes.items}>
            <span className={classes.label}>Professional skills:</span>
            <div className={classes.labelItem}>{props.profileInfo.lookingForAJobDescription}</div>
        </div>
        <div className={classes.contactsWrapper}>
            <span className={classes.label}>Contacts: </span>
            {Object.keys(props.profileInfo.contacts)
                .filter((key) => props.profileInfo.contacts[key] )
                .map((key) => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profileInfo.contacts[key]}/>
        })}
        </div>
        <div className={classes.buttonWrapper}>
            {props.isOwner ? <Button setEditMode={props.setEditModeOn}/> : null}
        </div>
    </div>
}


export default UserProfileInfo;
