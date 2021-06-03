import React from 'react'
import classes from './Content.module.css'
import News from './news/News'
import Music from './music/Music'
import Settings from './settings/Settings'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from './loginpage/Login'
import Preloader from '../preloader/Preloader'
import { ChatPage } from '../../pages/ChatPage/ChatPage'

const DialogsContainer = React.lazy(() => import('./dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./profile/ProfileContainer'))
const UsersPage = React.lazy(() => import('./users/UsersPage'))

const Content: React.FC = () => {
    return (
        <div className={classes.wrap}>
            <React.Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersPage/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/chat' component={ChatPage}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default Content
