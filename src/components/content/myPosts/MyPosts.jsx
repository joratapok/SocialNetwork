import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";
import Posts from "./posts/Posts";

const MyPosts = (props) => {
    let areaElem = React.createRef()

    let addNewPost = () => {
        let text = areaElem.current.value
        props.addPost(text)
    }

    return(
        <div>
            <div className={classes.newPostWrap}>
            	<div className={classes.textAreaWrap}>
            		<textarea ref={areaElem}>Write something</textarea>
            	</div>
            	<div className={classes.buttonWrap}>
            		<button onClick={ addNewPost } className={classes.button}>Public</button>
            	</div>
            </div>    
            
            <Posts posts={props.posts}/>
        </div>
    )
}

export default MyPosts;