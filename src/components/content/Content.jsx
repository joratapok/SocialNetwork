import React from 'react';
import classes from './Content.module.css'
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";
import LoginContainer from "./profile/ProfileContainer";
import UsersContainer from "./users/UsersContainer";
import Preloader from "../preloader/Preloader";
//import DialogsContainer from "./dialogs/DialogsContainer";
//import ProfileContainer from "./profile/ProfileContainer";


const DialogsContainer = React.lazy(() => import("./dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./profile/ProfileContainer"));

const Content = (props) => {
    return (
        <div className={classes.wrap}>

            <Route path='/profile/:userId?'
                   render={() => {
                       return (
                           <React.Suspense fallback={<Preloader/>}>
                               <ProfileContainer/>
                           </React.Suspense>
                       )
                   }}/>
            <Route path='/dialogs' render={() =>
                <DialogsContainer/>}/>
            <Route path='/users' render={() =>
                <UsersContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' render={() => <LoginContainer/>}/>
        </div>
    )
}

export default Content;
