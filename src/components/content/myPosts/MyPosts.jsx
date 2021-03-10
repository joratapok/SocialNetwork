import React from 'react';
import classes from './MyPosts.module.css'
import Posts from "./posts/Posts";

const MyPosts = (props) => {

    let onChangeArea = (e) => {
        let text = e.target.value
        props.changeAria(text)
    }

    let onAddNewPost = () => {
        props.addNewPost()
    }

    return(
        <div>
            <div className={classes.newPostWrap}>
                <div className={classes.textAreaWrap}>
                    <textarea onChange={ onChangeArea } value={props.postsPage.postNewText} />
                </div>
                <div className={classes.buttonWrap}>
                    <button onClick={ onAddNewPost } className={classes.button}>Public</button>
                </div>
            </div>
            <Posts posts={props.postsPage.posts}/>
        </div>
    )
}

export default MyPosts;