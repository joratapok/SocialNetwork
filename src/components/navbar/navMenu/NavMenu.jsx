import React from 'react';
import classes from './NavMenu.module.css'
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.items}><NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink></div>
            <div className={classes.items}><NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink></div>
            <div className={classes.items}><NavLink activeClassName={classes.active} to='/news'>News</NavLink></div>
            <div className={classes.items}><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></div>
            <div className={classes.items}><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></div>
        </nav>
    )
}

export default NavMenu;