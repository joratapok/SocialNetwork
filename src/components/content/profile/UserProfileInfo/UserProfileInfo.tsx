import React, { useEffect, useState } from 'react'
import Preloader from '../../../preloader/Preloader'
import classes from './UserProfileInfo.module.css'
import Contacts from './contacts/Contacts'
import { ProfileReduxForm } from './profileFormData/ProfileFormData'
import Button from './button/Button'
import { contactsType, userType } from '../../../../types/types'
import ProfileStatusAPIContainer from './profileStatus/ProfileStatusContainer'

type UserProfileInfoType = {
    profileInfo: userType
    isOwner: boolean
    auth: () => void
    status: string
    savePhoto: (file: File) => void
    saveProfile: (user: userType) => Promise<void>
}

const UserProfileInfo: React.FC<UserProfileInfoType> = ({
    profileInfo,
    isOwner,
    savePhoto, auth,
    saveProfile,
    status
}) => {
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        return () => {
            auth()
        }
    }, [])

    const onSubmit = (formData: userType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    if (!profileInfo) {
        return <Preloader/>
    }

    const PhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.items}>
                <div className={classes.fullNameWrapper}>
                    <div className={classes.fullName}>{profileInfo.fullName}</div>
                    {isOwner && <ProfileStatusAPIContainer/>}
                    {!isOwner && <div className={classes.alienStatus}>
                        Status: {status}</div>}
                </div>

            </div>

            {editMode
                ? <ProfileReduxForm initialValues={profileInfo}
                    onSubmit={onSubmit}
                    setEditModeOff={() => {
                        setEditMode(false)
                    }}/>
                : <ProfileData profileInfo={profileInfo}
                    isOwner={isOwner}
                    setEditModeOn={() => {
                        setEditMode(true)
                    }}/>
            }

            {isOwner && <div>
                <input className={classes.input} id={'inputAvatar'} type={'file'} onChange={PhotoSelected}/>
                <label htmlFor={'inputAvatar'}>
                    <span className={classes.changeAvatar}>Change Avatar</span>
                </label>
            </div>}
        </div>
    )
}

type ProfileDataType = {
    profileInfo: userType
    isOwner: boolean
    setEditModeOn: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({
    profileInfo,
    isOwner,
    setEditModeOn
}) => {
    return <div>
        <div className={classes.items}>
            <span className={classes.label}>About me:</span>
            <div className={classes.labelItem}>{profileInfo.aboutMe}</div>
        </div>
        <div className={classes.items}>
            <span className={classes.label}>Looking Job:</span>
            <div className={classes.labelItem}>{profileInfo.lookingForAJob ? 'Yes' : 'No'}</div>
        </div>
        <div className={classes.items}>
            <span className={classes.label}>Professional skills:</span>
            <div className={classes.labelItem}>{profileInfo.lookingForAJobDescription}</div>
        </div>
        <div className={classes.contactsWrapper}>
            <span className={classes.label}>Contacts: </span>
            {Object.keys(profileInfo.contacts)
                .filter((key) => profileInfo.contacts[key as keyof contactsType])
                .map((key) => {
                    return <Contacts key={key} contactTitle={key}
                        contactValue={profileInfo.contacts[key as keyof contactsType]}/>
                })}
        </div>
        <div className={classes.buttonWrapper}>
            {isOwner ? <Button setEditMode={setEditModeOn}/> : null}
        </div>
    </div>
}

export default UserProfileInfo
