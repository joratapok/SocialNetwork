import React from 'react'
import classes from "./Button.module.css"

let Button = ({setEditMode}) => {

    return <div className={classes.buttonWrap}>
        <button onClick={setEditMode} className={classes.button}>Edit</button>
    </div>
}

export default Button
