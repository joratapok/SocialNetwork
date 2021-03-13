import React from 'react';
import classes from './LeftColumn.module.css'
import Avatar from "./avatar/Avatar";
import NavMenuContainer from "./navMenu/NavMenuContainer";

const LeftColumn = () => {
    return (
        <div className={classes.wrapper}>
            <Avatar/>
            <NavMenuContainer/>
        </div>
    )
}

export default LeftColumn;

