import React from 'react';
import {addNewPostActionCreator, addPostActionCreator} from "../../../redux/postsPage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let changeArea = (text) => {
                    store.dispatch(addPostActionCreator(text))
                }

                let addNewPost = () => {
                    store.dispatch(addNewPostActionCreator())
                }
                return (
                    <MyPosts changeAria={changeArea}
                             addNewPost={addNewPost}
                             postsPage={state.postsPage}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}*/

let mapSateToProps = (state) => {
    return {
        postsPage: state.postsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost() {
            dispatch(addNewPostActionCreator())
        },
        changeAria(text) {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapSateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;