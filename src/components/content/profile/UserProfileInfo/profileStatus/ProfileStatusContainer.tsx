import React from 'react';
import {connect} from "react-redux";
import {setProfileStatus, } from "../../../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {AppStateType} from "../../../../../redux/redux-store";

type MapStatePropsType = {
    status: string
}

type MapDispatchPropsType = {
    setProfileStatus: (text: string) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileStatusAPIContainer extends React.Component<PropsType> {


    setStatus = (text: string) => {
      this.props.setProfileStatus(text)
    }

    render() {
        return (
            <ProfileStatus setStatus={this.setStatus} statusFromRedux={this.props.status}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    status: state.postsPage.status,
})


connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {setProfileStatus, })(ProfileStatusAPIContainer)

export default ProfileStatusAPIContainer