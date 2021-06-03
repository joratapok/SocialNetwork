import React from 'react'
import classes from './Post.module.css'

type PropsType = {
    message: string
}

const Post: React.FC<PropsType> = ({ message }) => {
    return (
        <div className={classes.postBody}>
            { message }
        </div>
    )
}

export default Post
