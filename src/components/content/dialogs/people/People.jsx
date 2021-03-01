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

    let dialogsData = [
        {id: 1, name: 'Marina'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Dmitry'},
    ]

    return(
        <div className={classes.wrapper}>
            <Person personName={dialogsData[0].name} id={dialogsData[0].id}/>
            <Person personName={dialogsData[1].name} id={dialogsData[1].id}/>
            <Person personName={dialogsData[2].name} id={dialogsData[2].id}/>
        </div>
    )
}

export default People;