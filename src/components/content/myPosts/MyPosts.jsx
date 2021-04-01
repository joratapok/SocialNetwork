import React from 'react';
import {Field, reduxForm, SubmissionError} from "redux-form";
import classes from './MyPosts.module.css'
import Posts from "./posts/Posts";
import Button from "./button/Button";
import {maxLengthCreator, minLength, required,} from "../../../utils/validators/validator";
import {Textarea} from "../../common/formsControl/FormsControl";

const MyPosts = (props) => {

    let addNewPost = (formData) => {
        if (formData.post) {
            props.addNewPost(formData.post)
        } else {
            throw new SubmissionError({
                post: `whrite something  ༼ つ ◕_◕ ༽つ`
            })
        }

    }

    const maxLength500 = maxLengthCreator(500)

    let AddPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div className={classes.textAreaWrap}>
                    <Field name={'post'} placeholder={'Post new post ;)'}
                           validate={[maxLength500,]}
                           component={Textarea}/>
                </div>
                <Button/>
            </form>
        )
    }

    AddPostForm = reduxForm({form: 'newPost'})(AddPostForm)

    return (
        <div>
            <div className={classes.newPostWrap}>
                <AddPostForm onSubmit={addNewPost}/>
            </div>
            <Posts photo={props.photo} posts={props.postsPage.posts}/>
        </div>
    )
}

export default MyPosts;
