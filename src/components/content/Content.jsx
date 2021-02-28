import React from 'react';
import classes from './Content.module.css'
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";

const Content = () => {
    return(
        <div className={classes.wrapper}>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    )
}

export default Content;

