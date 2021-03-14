import React from 'react';
import classes from './NavMenu.module.css'
import {NavLink} from "react-router-dom";

const NavMenu = (props) => {
    return(
        <div className={classes.wrap}>
            <div className={classes.items}>
                    {props.auth.isAuth ? props.auth.login
                        : <NavLink activeClassName={classes.active} to='/login'>Login</NavLink> }
            </div>
        </div>
    )
}

export default NavMenu;