import React from 'react';
import classes from './NavMenu.module.css'
import {NavLink} from "react-router-dom";

const NavMenu = (props) => {

    const User = (props) => {
      return(
        <div className={classes.loginWrap}>
          <div className={classes.login}>Hello, {props.login}</div>
          <button onClick={props.logout} className={classes.logoutButton}> Logout </button>
        </div>
      )
    }

    return(
        <div className={classes.wrap}>
            <div className={classes.items}>
                    {props.auth.isAuth
                        ? <User login={props.auth.login} logout={props.logout} />
                        : <NavLink activeClassName={classes.active} to='/login'>Login</NavLink> }
            </div>
        </div>
    )
}

export default NavMenu;
