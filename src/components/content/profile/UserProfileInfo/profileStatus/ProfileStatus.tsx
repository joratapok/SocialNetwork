import React, { ChangeEvent, useEffect, useState } from 'react'
import classes from './ProfileStatus.module.css'

type PropsType = {
    statusFromRedux: string
    setStatus: (text: string) => void
}

const ProfileStatus: React.FC <PropsType> = ({ setStatus, statusFromRedux }) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setLocalStatus] = useState<string>(statusFromRedux)

    useEffect(() => {
        setLocalStatus(statusFromRedux)
    }, [statusFromRedux])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        setStatus(status)
    }
    const changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(event.target.value)
    }

    return (
        <div className={classes.statusWrapper}>
            {!editMode &&
            <div className={classes.statusOnChangeDiv} onClick={activateEditMode}>
                <div>{statusFromRedux}</div>
            </div>
            }
            {editMode &&
            <div className={classes.inputWrapper}>
                <input onChange={changeStatus} placeholder="write status"
                    onBlur={deactivateEditMode} autoFocus={true}
                    value={status} className={classes.input}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus
