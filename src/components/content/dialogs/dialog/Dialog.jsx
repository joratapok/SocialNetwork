import React from 'react';
import classes from './Dialog.module.css'


const Dialog = () => {
    return(
        <div className={classes.wrapper}>
            <div>
                First message
            </div>
            <div>
                Second message
            </div>
            <div>
                Third message
            </div>
        </div>
    )
}

export default Dialog;