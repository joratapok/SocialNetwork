import React from 'react';
import {connect} from "react-redux";
import {setProfileStatus, } from "../../../../../redux/postsPage-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWIthHooks";

class ProfileStatusAPIContainer extends React.Component {


    setStatus = (text) => {
      this.props.setProfileStatus(text)
    }

    render() {
        return (
            <ProfileStatusWithHooks setStatus={this.setStatus} status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.postsPage.status,
})


export default connect(mapStateToProps, {setProfileStatus, })(ProfileStatusAPIContainer)
