import React from 'react';
import classes from './Content.module.css'
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import ProfileContainer from "./profile/ProfileContainer";
import LoginContainer from "./login/LoginContainer";

const Content = (props) => {
    return (
        <div className={classes.wrap}>

            <Route path='/profile/:userId?' render={() =>
                <ProfileContainer /> }/>
            <Route path='/dialogs' render={() =>
                <DialogsContainer /> }/>
            <Route path='/users' render={() =>
                <UsersContainer /> }/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/music' component={Settings}/>
            <Route path='/login' render={() => <LoginContainer/>}/>
        </div>
    )
}

export default Content;
