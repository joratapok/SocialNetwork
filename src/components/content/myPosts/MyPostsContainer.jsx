import React from 'react';
import {addNewPost, } from "../../../redux/postsPage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapSateToProps = (state) => {
    return {
        postsPage: state.postsPage,
        photo: state.postsPage.user.photos.small,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost(text) {
            dispatch(addNewPost(text))
        }
    }
}

const MyPostsContainer = connect(mapSateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
