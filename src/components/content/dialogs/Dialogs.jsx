import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './Dialogs.module.css'
import People from "./people/People";
import Dialog from "./dialog/Dialog";


const Dialogs = (props) => {

    let onSubmit = (formData) => {
        props.addNewMessage(formData)
    }


    let MessageAreaForm = (props) => {
      return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textAreaWrap}>
                <Field name='message' placeholder='write new message' component='textarea' />
            </div>
            <div className={classes.buttonWrap}>
                <button className={classes.button}>Public</button>
            </div>
        </form>
      )
    }

    MessageAreaForm = reduxForm({form: 'newMessage'})(MessageAreaForm)

    return (
        <div>
            <div className={classes.wrapper}>
                <People people={props.messagesPage.people}/>
                <Dialog dialogs={props.messagesPage.dialogs}/>
            </div>
            <div className={classes.newPostWrap}>
                <MessageAreaForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;
