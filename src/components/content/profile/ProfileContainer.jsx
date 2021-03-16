import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, } from "../../../redux/postsPage-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : this.props.auth.id
        this.props.getProfile(String(userId))
        this.props.getStatus(String(userId))
    }

    render() {

        return (
            <Profile {...this.props} profileInfo={this.props.user}/>
        )
    }
}

let mapStateToProps = (state) => ({
    user: state.postsPage.user,
    status: state.postsPage.status,
    auth: state.auth,
})

let ProfileContainer = compose(
    connect(mapStateToProps, {getProfile, getStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer)

export default ProfileContainer
