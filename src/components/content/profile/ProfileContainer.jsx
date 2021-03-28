import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto } from "../../../redux/postsPage-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MyPostsContainer from "../myPosts/MyPostsContainer";


class ProfileAPIContainer extends React.Component {

    refreshProfile() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : this.props.auth.id
        this.props.getProfile(String(userId))
        this.props.getStatus(String(userId))
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <>
                <Profile {...this.props}
                         profileInfo={this.props.user}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto} />

                { !this.props.match.params.userId && <MyPostsContainer/> }
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    user: state.postsPage.user,
    status: state.postsPage.status,
    auth: state.auth,
})

let ProfileContainer = compose(
    connect(mapStateToProps, {getProfile, getStatus, savePhoto }),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer)

export default ProfileContainer
