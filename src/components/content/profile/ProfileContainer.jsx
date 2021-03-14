import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, } from "../../../redux/postsPage-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 2
        this.props.getProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profileInfo={this.props.user}/>
        )
    }
}

let authRedirectComponent = withAuthRedirect(ProfileAPIContainer)

let mapStateToProps = (state) => ({
    user: state.postsPage.user,
})



let ProfileContainer = connect(mapStateToProps, {getProfile, })(withRouter(authRedirectComponent))

export default ProfileContainer