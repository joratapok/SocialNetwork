import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, } from "../../../redux/postsPage-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : this.props.auth.id
        debugger
        this.props.getProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profileInfo={this.props.user}/>
        )
    }
}

let mapStateToProps = (state) => ({
    user: state.postsPage.user,
    auth: state.auth,
})

let ProfileContainer = compose(
    connect(mapStateToProps, {getProfile, }),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer)

export default ProfileContainer