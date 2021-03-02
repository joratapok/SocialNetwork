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

    let people = [
        {id: 1, name: 'Marina'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Dmitry'},
    ]

    return(
        <div className={classes.wrapper}>
            {people.map(pers => <Person personName={pers.name} id={pers.id}/>)}
        </div>
    )
}

export default People;