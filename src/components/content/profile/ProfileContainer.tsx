import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile} from "../../../redux/profile-reducer";
import {authReducerType, authThunk} from "../../../redux/auth-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import MyPostsContainer from "../myPosts/MyPostsContainer";
import {userType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    user: userType
    status: string
    auth: authReducerType
}
type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    savePhoto: (file: any) => void
    authThunk: () => void
    saveProfile: (user: userType) => Promise<void>
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<any>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = (this.props.match.params.userId)
            ? this.props.match.params.userId
            : this.props.auth.id
        this.props.getProfile(Number(userId))
        this.props.getStatus(Number(userId))
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: AppStateType, snapshot: any) {
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
                         savePhoto={this.props.savePhoto}
                         auth={this.props.authThunk}
                         saveProfile={this.props.saveProfile}
                         status:{this.props.status}
                />

                {!this.props.match.params.userId && <MyPostsContainer/>}
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    user: state.postsPage.user,
    status: state.postsPage.status,
    auth: state.auth,
})

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getProfile, getStatus, savePhoto, authThunk, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
