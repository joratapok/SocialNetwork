import React from 'react'
import classes from "./CancelButton.module.css"

let CancelButton = ({setEditModeOff}) => {

    return <div className={classes.buttonWrap}>
        <button onClick={setEditModeOff} className={classes.button}>cancel</button>
    </div>
}

export default CancelButton
