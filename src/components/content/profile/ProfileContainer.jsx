import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/postsPage-reducer";
import withRouter from "react-router-dom/es/withRouter";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.user}/>
        )
    }
}

let mapStateToProps = (state) => ({
    user: state.postsPage.user,
})



let ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileAPIContainer))

export default ProfileContainer