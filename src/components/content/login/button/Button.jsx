import React from 'react'
import classes from "./Button.module.css"

let Button = (props) => {

    return <div className={classes.buttonWrap}>
        <button className={classes.button}>Login</button>
    </div>
}

export default Button
