import React from 'react';
import classes from './NavMenu.module.css'
import {NavLink} from "react-router-dom";
import {MapDispatchPropsType, MapStatePropsType} from "./NavMenuContainer";

type NavMenuPropsType = {
    login: null | string
    isAuth: boolean
    logout: () => void
}

const NavMenu: React.FC<NavMenuPropsType> =
    ({login, logout, isAuth}) => {

    const User: React.FC<NavMenuPropsType> = ({login, logout}) => {
      return(
        <div className={classes.loginWrap}>
          <div className={classes.login}>Hello, {login}</div>
          <button onClick={logout} className={classes.logoutButton}> Logout </button>
        </div>
      )
    }

    return(
        <div className={classes.wrap}>
            <div className={classes.items}>
                    {isAuth
                        ? <User login={login} logout={logout} isAuth={isAuth} />
                        : <NavLink activeClassName={classes.active} to='/login'>Login</NavLink> }
            </div>
        </div>
    )
}

export default NavMenu;
