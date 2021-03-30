import React from 'react'
import classes from "./Button.module.css"

let Button = (props) => {

    return <div className={classes.buttonWrap}>
        <button className={classes.button}>save</button>
    </div>
}

export default Button
