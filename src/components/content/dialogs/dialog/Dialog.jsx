import React from 'react';
import classes from './Dialog.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialog = (props) => {
    let dialogs = [
        {id: 1, message: 'First message'},
        {id: 2, message: 'Second message v rot kompot ne pishi mne bolshe'},
        {id: 3, message: 'Third message'},
    ]

    return(
        <div className={classes.wrapper}>
            { dialogs.map(d => <Message message={d.message}/>) }
        </div>
    )
}

export default Dialog;