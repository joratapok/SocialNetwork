import React from 'react';
import classes from './Content.module.css'
import Dialogs from "./dialogs/Dialogs";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";

const Content = (props) => {
    return (
        <div className={classes.wrap}>

            <Route path='/profile' render={() =>
                <MyPostsContainer /> }/>
            <Route path='/dialogs' render={() =>
                <DialogsContainer /> }/>
            <Route path='/users' render={() =>
                <UsersContainer /> }/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    )
}

export default Content;

