import React from 'react'
import classes from './LeftColumn.module.css'
import NavMenuContainer from './navMenu/NavMenuContainer'
import AvatarContainer from './avatar/AvatarContainer'

const LeftColumn: React.FC = () => {
    return (
        <div className={classes.wrapper}>
            <AvatarContainer/>
            <NavMenuContainer/>
        </div>
    )
}

export default LeftColumn
