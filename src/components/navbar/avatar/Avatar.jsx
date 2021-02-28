import React from 'react';
import classes from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={classes.divAvatar}>
            <div className={classes.backAvatar}>
                <img className={classes.avatar}
                     src="https://media.geeksforgeeks.org/wp-content/uploads/20210209004413/AVATAR2.png" alt=""/>
            </div>
        </div>
    )
}

export default Avatar;