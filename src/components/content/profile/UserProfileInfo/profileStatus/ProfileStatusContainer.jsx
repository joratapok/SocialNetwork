import React from 'react';
import Profile from "../../Profile";
import {connect} from "react-redux";
import {setProfileStatus, } from "../../../../../redux/postsPage-reducer";
import ProfileStatus from "./ProfileStatus"

class ProfileStatusAPIContainer extends React.Component {


    setStatus = (text) => {
      this.props.setProfileStatus(text)
    }

    render() {
        return (
            <ProfileStatus setStatus={this.setStatus} status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.postsPage.status,
})


export default connect(mapStateToProps, {setProfileStatus, })(ProfileStatusAPIContainer)
