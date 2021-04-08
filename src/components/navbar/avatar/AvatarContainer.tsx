import React from 'react';
import {savePhoto,} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Avatar from "./Avatar";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../../redux/redux-store";



let mapSateToProps = (state: AppStateType) => {
    return {
        photo: state.postsPage.user.photos.large,
        inProgress: state.usersPage.inProgress,
    }
}

let ProfileContainer = compose<React.ComponentType>(
    connect(mapSateToProps, { savePhoto }),
    withRouter,
)(Avatar)

export default ProfileContainer
