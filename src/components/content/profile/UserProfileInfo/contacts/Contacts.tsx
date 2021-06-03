import React from 'react'
import classes from './Contacts.module.css'

type PropsType = {
    contactTitle: string
    contactValue: string | null
}

const Contacts: React.FC<PropsType> = ({ contactTitle, contactValue }) => {
    return (
        <div className={classes.contacts}>
            <div className={classes.contact}>{contactTitle}:</div>
            <div>{contactValue}</div>
        </div>
    )
}

export default Contacts
