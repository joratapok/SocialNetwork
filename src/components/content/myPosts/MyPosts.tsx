import React from 'react';
import {Field, InjectedFormProps, reduxForm, SubmissionError} from "redux-form";
import classes from './MyPosts.module.css'
import Posts from "./posts/Posts";
import Button from "./button/Button";
import {maxLengthCreator,} from "../../../utils/validators/validator";
import {Textarea} from "../../common/formsControl/FormsControl";
import {MapDispatchPropsType, MapStateToProps} from "./MyPostsContainer";

type PropsType = MapStateToProps & MapDispatchPropsType
type FormDataType = {
    post: string
}
type AddPostFormOwnProps = {
    onSubmit:  (formData: FormDataType) => void
}

const MyPosts: React.FC<PropsType> = ({posts, photo, addNewPost}) => {

    let onSubmit = (formData: FormDataType) => {
        if (formData.post) {
            addNewPost(formData.post)
        } else {
            throw new SubmissionError({
                post: `whrite something  ༼ つ ◕_◕ ༽つ`
            })
        }

    }

    const maxLength500 = maxLengthCreator(500)

    let AddPostForm: React.FC<InjectedFormProps<FormDataType, AddPostFormOwnProps> & AddPostFormOwnProps>
        = ({handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div className={classes.textAreaWrap}>
                    <Field name={'post'} placeholder={'Post new post ;)'}
                           validate={[maxLength500,]}
                           component={Textarea}/>
                </div>
                <Button/>
            </form>
        )
    }

    const AddPostReduxForm = reduxForm<FormDataType, AddPostFormOwnProps>({form: 'newPost'})(AddPostForm)

    return (
        <div>
            <div className={classes.newPostWrap}>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <Posts photo={photo} posts={posts}/>
        </div>
    )
}

export default MyPosts;
