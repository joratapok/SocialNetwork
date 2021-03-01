import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";
import Posts from "./posts/Posts";

const MyPosts = () => {
    return(
        <div>
            my posts
            <div>
                new post
            </div>
            <Posts/>
        </div>
    )
}

export default MyPosts;