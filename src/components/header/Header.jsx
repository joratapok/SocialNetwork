import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.divHeadImg}>
                <img className={classes.headImg} src="https://i.pinimg.com/originals/c4/9a/fc/c49afc3e6634c8e2d8161618b57aa122.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Header;