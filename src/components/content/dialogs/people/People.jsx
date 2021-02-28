import React from 'react';
import classes from './People.module.css'
import {NavLink} from "react-router-dom";


const People = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.person}>
                <NavLink to='/dialogs/1' activeClassName={classes.active}>Marina</NavLink>
            </div>
            <div className={classes.person}>
                <NavLink to='/dialogs/2' activeClassName={classes.active}>Maksim</NavLink>
            </div>
            <div className={classes.person}>
                <NavLink to='/dialogs/3' activeClassName={classes.active}>Dmitriy</NavLink>
            </div>
        </div>
    )
}

export default People;