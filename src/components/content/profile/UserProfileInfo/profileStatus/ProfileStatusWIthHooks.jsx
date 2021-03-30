import React, {useEffect, useState} from 'react';
import classes from "./ProfileStatus.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setLocalStatus] = useState(props.status)

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status)
    }
    const changeStatus = (event) => {
        setLocalStatus(event.target.value)
    }

    return (
        <div className={classes.statusWrapper}>
            {!editMode &&
            <div className={classes.statusOnChangeDiv} onClick={activateEditMode}>
                <div>{props.status}</div>
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

export default ProfileStatusWithHooks
