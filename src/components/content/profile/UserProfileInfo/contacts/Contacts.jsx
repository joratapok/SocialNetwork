import React from 'react';
import classes from './Contacts.module.css'

const Contacts = ({contactTitle, contactValue}) => {
    return (
            <div className={classes.contacts}>
                <div className={classes.contact}>{contactTitle}:</div>
                <div>{contactValue}</div>
            </div>
    )
}

export default Contacts;
