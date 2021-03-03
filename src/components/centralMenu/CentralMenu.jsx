import React from 'react';
import classes from './CentralMenu.module.css'
import {NavLink} from "react-router-dom";

const CentralMenu = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.wrapperCentral}>
                <div className={classes.leftCentralMenu}></div>
                <div className={classes.rightCentralMenu}>
                    <div className={classes.item}>
                        <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink activeClassName={classes.active} to='/news'>News</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink activeClassName={classes.active} to='/music'>Music</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CentralMenu;

