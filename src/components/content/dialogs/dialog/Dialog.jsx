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

    return(
        <div className={classes.wrapper}>
            { props.dialogs.map(d => <Message message={d.message}/>) }
        </div>
    )
}

export default Dialog;