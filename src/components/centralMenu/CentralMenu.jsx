import React from 'react';
import classes from './CentralMenu.module.css'

const CentralMenu = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.centralMenu}>
                <div className={classes.item}>
                    About
                </div>
                <div className={classes.item}>
                    Photos
                </div>
                <div className={classes.item}>
                    Friends
                </div>
                <div className={classes.item}>
                    More
                </div>
            </div>
        </div>
    )
}

export default CentralMenu;