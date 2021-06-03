import React from 'react';
import classes from './CentralMenu.module.css'
import { NavLink, Link } from "react-router-dom";
import { Button } from 'antd';

const CentralMenu: React.FC = () => {
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
                        <NavLink activeClassName={classes.active} to='/users'>Users</NavLink>
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

                        <Button type="primary"><Link to='/Chat'>Chat</Link></Button>
                    

                </div>
            </div>
        </div>
    )
}

export default CentralMenu;
