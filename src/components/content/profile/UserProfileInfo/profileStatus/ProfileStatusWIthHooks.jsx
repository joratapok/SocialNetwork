import React, {useEffect, useState} from 'react';
import Profile from "../../Profile";
import {connect} from "react-redux";
import {setProfileStatus,} from "../../../../../redux/postsPage-reducer";
import ProfileStatus from "./ProfileStatus"
import classes from "./ProfileStatus.module.css";

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
        <div>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={changeStatus} placeholder="write status"
                       onBlur={deactivateEditMode} autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks
