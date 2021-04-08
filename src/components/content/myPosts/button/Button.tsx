import React from 'react'
import classes from "./Button.module.css"

let Button = () => {

    return <div className={classes.buttonWrap}>
        <button className={classes.button}>Public</button>
    </div>
}

export default Button
