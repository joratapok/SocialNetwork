import React from 'react';
import classes from './Content.module.css'
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Route} from "react-router-dom";
import LoginContainer from "./loginpage/LoginContainer";
//import UsersContainer from "./users/UsersContainer";
import Preloader from "../preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./users/UsersContainer"));

const Content = (props) => {
    return (
        <div className={classes.wrap}>
            <React.Suspense fallback={<Preloader/>}>

            <Route path='/profile/:userId?' render={() => <ProfileContainer/> }/>
            <Route path='/dialogs' render={() => <DialogsContainer/> }/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' render={() => <LoginContainer />}/>
            </React.Suspense>
        </div>
    )
}

export default Content;
