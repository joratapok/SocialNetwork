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
    let dialogData = [
        {id: 1, message: 'First message'},
        {id: 2, message: 'Second message'},
        {id: 3, message: 'Third message'},
    ]

    return(
        <div className={classes.wrapper}>
            <Message message={dialogData[0].message}/>
            <Message message={dialogData[1].message}/>
            <Message message={dialogData[2].message}/>
        </div>
    )
}

export default Dialog;