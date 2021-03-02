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

const People = (props) => {

    return(
        <div className={classes.wrapper}>
            {props.people.map(pers => <Person personName={pers.name} id={pers.id}/>)}
        </div>
    )
}

export default People;