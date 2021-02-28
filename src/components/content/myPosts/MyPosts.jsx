import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            my posts
            <div>
                new post
            </div>
            <Post message='Hi psina' />
            <Post message="It's my first post" />
            <Post />
        </div>
    )
}

export default MyPosts;