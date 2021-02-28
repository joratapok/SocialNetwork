import React from 'react';
import classes from './People.module.css'
import {NavLink} from "react-router-dom";

const Person = (props) => {
    return (
        <div className={classes.person}>
            <NavLink to={'/dialogs/'+props.id} activeClassName={classes.active}>{props.personName}</NavLink>
        </div>
    )
}

const People = () => {
    return(
        <div className={classes.wrapper}>
            <Person personName='Marina' id='1'/>
            <Person personName='Maksim' id='2'/>
            <Person personName='Dmitry' id='3'/>
        </div>
    )
}

export default People;