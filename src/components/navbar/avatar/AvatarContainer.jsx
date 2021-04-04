import React from 'react';
import {savePhoto,} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Avatar from "./Avatar";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

let mapSateToProps = (state) => {
    return {
        photo: state.postsPage.user.photos.large,
        inProgress: state.usersPage.inProgress,
    }
}

let ProfileContainer = compose(
    connect(mapSateToProps, { savePhoto }),
    withRouter,
)(Avatar)

export default ProfileContainer
