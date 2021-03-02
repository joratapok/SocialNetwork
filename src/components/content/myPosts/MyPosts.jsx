import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";
import Posts from "./posts/Posts";

const MyPosts = (props) => {
    return(
        <div>
            my posts
            <div>
                new post
            </div>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default MyPosts;