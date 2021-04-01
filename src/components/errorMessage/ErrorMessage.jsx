import React, {useEffect, useState} from 'react'
import classes from "./ErrorMessage.module.css";
import cn from "classnames"
import xIcon from "../../assets/images/xicon.png"

let ErrorMessage = ({message}) => {

    let [toggle, setToggle] = useState(false)

    useEffect(() => {
        setToggle(!!message)
    },[message])

    return(
        <div className={cn( classes.wrapper,
            {[classes.active]: toggle},
            )} >
            <div className={classes.message}>
                {message}
            </div>
            <div className={classes.xButtonWrapper}
                 onClick={() => setToggle(false)}>
                <img className={classes.xButton}  src={xIcon} alt="X"/>
            </div>
        </div>
    )
}

export default ErrorMessage
