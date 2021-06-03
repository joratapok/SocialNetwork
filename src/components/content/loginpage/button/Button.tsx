import React from 'react'
import classes from './Button.module.css'

const Button = () => {
    return <div className={classes.buttonWrap}>
        <button type={'submit'} className={classes.button}>Login</button>
    </div>
}

export default Button
