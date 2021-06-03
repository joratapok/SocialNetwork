import React from 'react'
import classes from './Button.module.css'

type PropsType = {
    setEditMode: () => void
}

const Button: React.FC<PropsType> = ({ setEditMode }) => {
    return <div className={classes.buttonWrap}>
        <button onClick={setEditMode} className={classes.button}>Edit</button>
    </div>
}

export default Button
