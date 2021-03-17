import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './MyPosts.module.css'
import Posts from "./posts/Posts";

const MyPosts = (props) => {

    let addNewPost = (formData) => {
        props.addNewPost(formData)
    }

    let AddPostForm = (props) => {
      return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textAreaWrap}>
                <Field component={'textarea'} name={'post'} placeholder={'Post new post ;)'} />
            </div>
            <div className={classes.buttonWrap}>
                <button className={classes.button}>Public</button>
            </div>
        </form>
      )
    }

    AddPostForm = reduxForm({form: 'newPost'})(AddPostForm)

    return(
        <div>
            <div className={classes.newPostWrap}>
                <AddPostForm onSubmit={addNewPost}/>
            </div>
            <Posts posts={props.postsPage.posts}/>
        </div>
    )
}

export default MyPosts;
