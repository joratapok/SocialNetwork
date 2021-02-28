import React from 'react';
import classes from './LeftColumn.module.css'
import Avatar from "./avatar/Avatar";
import NavMenu from "./navMenu/NavMenu";

const LeftColumn = () => {
    return (
        <div className={classes.wrapper}>
            <Avatar/>
            <NavMenu/>
        </div>
    )
}

export default LeftColumn;

