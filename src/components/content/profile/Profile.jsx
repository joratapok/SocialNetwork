import React from 'react';
import classes from './Profile.module.css'
import {Route} from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import News from "../news/News";
import Music from "../music/Music";
import Settings from "../settings/Settings";

const Profile = () => {
    return(
        <div className={classes.wrapper}>
            profile
        </div>
    )
}

export default Profile;