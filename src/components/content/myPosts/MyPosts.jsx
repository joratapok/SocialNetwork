import React from 'react';
import classes from './MyPosts.module.css'
import Posts from "./posts/Posts";

const MyPosts = (props) => {
    let areaElem = React.createRef()

    let changeArea = () => {
        let text = areaElem.current.value
        props.recTextArea(text)
    }

    let addNewPost = () => {
        props.addPost(props.posts.postNewText)
    }

    return(
        <div>
            <div className={classes.newPostWrap}>
            	<div className={classes.textAreaWrap}>
            		<textarea ref={areaElem} onChange={ changeArea } value={props.posts.postNewText} />
            	</div>
            	<div className={classes.buttonWrap}>
            		<button onClick={ addNewPost } className={classes.button}>Public</button>
            	</div>
            </div>    
            
            <Posts posts={props.posts.posts}/>
        </div>
    )
}

export default MyPosts;