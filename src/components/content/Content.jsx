import React from 'react';
import classes from './Content.module.css'
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import {Redirect, Route, Switch} from "react-router-dom";
import LoginContainer from "./loginpage/LoginContainer";
//import UsersContainer from "./users/UsersContainer";
import Preloader from "../preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./users/UsersContainer"));

const Content = () => {
    return (
        <div className={classes.wrap}>
            <React.Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default Content;
