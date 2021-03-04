import React from 'react';
import classes from './Content.module.css'
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";
import MyPosts from "./myPosts/MyPosts";

const Content = (props) => {
     //debugger
    return(
        <div className={classes.wrap}>

            <Route path='/profile' render={ () => <MyPosts posts={props.state.postsPage} addPost={props.addPost} recTextArea={props.recTextArea}/> } />
            <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} people={props.state.messagesPage.people}/> } />
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    )
}

export default Content;

