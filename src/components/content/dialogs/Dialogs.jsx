import React from 'react';
import classes from './Dialogs.module.css'
import People from "./people/People";
import Dialog from "./dialog/Dialog";


const Dialogs = (props) => {

    let onAddNewMessage = () => {
        props.addNewMessage()
    }

    let onChangeMessageArea = (e) => {
        let text = e.target.value
        props.changeMessageArea(text)
    }

    return (
        <div>
            <div className={classes.wrapper}>
                <People people={props.messagesPage.people}/>
                <Dialog dialogs={props.messagesPage.dialogs}/>
            </div>
            <div className={classes.newPostWrap}>
                <div className={classes.textAreaWrap}>
                    <textarea onChange={onChangeMessageArea} value={props.messagesPage.postNewMessage}/>
                </div>
                <div className={classes.buttonWrap}>
                    <button onClick={onAddNewMessage} className={classes.button}>Public</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;