import React from 'react'
import classes from './FormsControl.module.css'

export const Textarea = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return(
        <div className={classes.textAreaWrap}>
            <textarea className={classes.textArea+' '+(hasError ? classes.error :'')} {...props}{...props.input} ></textarea>
            {hasError && <span className={classes.errorMessage}>{props.meta.error} </span>}
        </div>
    )
}

export const Input = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return(
        <div className={classes.textAreaWrap}>
            <input className={classes.input +' '+(hasError ? classes.error :'')} {...props}{...props.input} />
    
            {hasError && <span className={classes.errorMessage}>{props.meta.error} </span>}

        </div>
    )
}
