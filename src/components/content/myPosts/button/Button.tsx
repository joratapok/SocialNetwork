import React from 'react'
import classes from './Button.module.css'

const Button = () => {
    return <div className={classes.buttonWrap}>
        <button className={classes.button}>Public</button>
    </div>
}

export default Button
