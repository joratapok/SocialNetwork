import React from 'react'
import classes from './Dialog.module.css'
import { dialogType } from '../../../../redux/dialogs-reducer'

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

type DialogPropsType = {
    dialogs: Array<dialogType>
}

const Dialog: React.FC<DialogPropsType> = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.dialogs.map(d => <Message message={d.message}/>)}
        </div>
    )
}

export default Dialog
