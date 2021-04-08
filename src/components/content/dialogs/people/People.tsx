import React from 'react';
import classes from './People.module.css'
import {NavLink} from "react-router-dom";
import {peopleType} from "../../../../redux/dialogs-reducer";

type PeoplePropsType = {
    people: peopleType[]
}

const Person: React.FC<peopleType> = ({name, id}) => {
    return (
        <div className={classes.person}>
            <NavLink to={'/dialogs/'+id} activeClassName={classes.active}>{name}</NavLink>
        </div>
    )
}

const People: React.FC<PeoplePropsType> = ({people}) => {

    return(
        <div className={classes.wrapper}>
            {people.map(pers => <Person key={pers.id} name={pers.name} id={pers.id}/>)}
        </div>
    )
}

export default People;