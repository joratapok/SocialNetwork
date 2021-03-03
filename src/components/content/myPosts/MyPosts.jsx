import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";
import Posts from "./posts/Posts";

const MyPosts = (props) => {
    return(
        <div>
            <div className={classes.newPostWrap}>
            	<div className={classes.textAreaWrap}>
            		<textarea>Write something</textarea>
            	</div>
            	<div className={classes.buttonWrap}>
            		<button className={classes.button}>Public</button>
            	</div>
            </div>    
            
            <Posts posts={props.posts}/>
        </div>
    )
}

export default MyPosts;