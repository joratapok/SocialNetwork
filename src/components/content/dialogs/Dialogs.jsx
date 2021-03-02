import React from 'react';
import classes from './Dialogs.module.css'
import People from "./people/People";
import Dialog from "./dialog/Dialog";


const Dialogs = (props) => {
    return(
        <div className={classes.wrapper}>
            <People people={props.people}/>
            <Dialog dialogs={props.dialogs}/>
        </div>
    )
}

export default Dialogs;