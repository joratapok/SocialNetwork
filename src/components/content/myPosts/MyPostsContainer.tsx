import { actionsProfileReducer } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'

export type MapStateToProps = ReturnType<typeof mapSateToProps>
export type MapDispatchPropsType = {
    addNewPost: (post: string) => void
}

const mapSateToProps = (state: AppStateType) => {
    return {
        posts: state.postsPage.posts,
        photo: state.postsPage.user.photos.small
    }
}

const MyPostsContainer = connect<MapStateToProps, MapDispatchPropsType, {}, AppStateType>
(mapSateToProps, { addNewPost: actionsProfileReducer.addNewPost })(MyPosts)

export default MyPostsContainer
