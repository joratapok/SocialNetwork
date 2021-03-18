import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './MyPosts.module.css'
import Posts from "./posts/Posts";
import Button from "./button/Button";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/formsControl/FormsControl";

const MyPosts = (props) => {

    let addNewPost = (formData) => {
        props.addNewPost(formData)
    }

    const maxLength100 = maxLengthCreator(100)

    let AddPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div className={classes.textAreaWrap}>
                    <Field name={'post'} placeholder={'Post new post ;)'}
                           validate={[required, maxLength100]}
                           component={Textarea}/>
                </div>
                <Button />
            </form>
        )
    }

    AddPostForm = reduxForm({form: 'newPost'})(AddPostForm)

    return (
        <div>
            <div className={classes.newPostWrap}>
                <AddPostForm onSubmit={addNewPost}/>
            </div>
            <Posts posts={props.postsPage.posts}/>
        </div>
    )
}

export default MyPosts;
