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
            <Message message='First message'/>
            <Message message='Second message'/>
            <Message message='Third message'/>
        </div>
    )
}

export default Dialog;