import React from 'react';
import classes from './Dialogs.module.css'
import People from "./people/People";
import Dialog from "./dialog/Dialog";


const Dialogs = () => {
    return(
        <div className={classes.wrapper}>
            <People/>
            <Dialog/>
        </div>
    )
}

export default Dialogs;