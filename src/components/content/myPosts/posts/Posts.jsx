import React from 'react';
import classes from './Posts.module.css'
import Post from "../post/Post";


const Posts = () => {

    let postsData = [
        {id: 1, post: 'Hi psina'},
        {id: 2, post: 'It\'s my first post'},
    ]

    return(
        <div>
            {postsData.map((item) => {
                return <Post message={item.post} />
            })}
            {/*<Post message='hello'/>*/}
        </div>
    )
}

export default Posts;