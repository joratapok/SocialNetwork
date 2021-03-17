import React from 'react';
import NavMenu from "./NavMenu";
import {connect} from "react-redux";
import {authThunk, setAuthUser, logoutThunk} from "../../../redux/auth-reducer";

class NavMenuContainer extends React.Component {

    componentDidMount() {
        this.props.authThunk()
    }

    logout() {
      logoutThunk()
    }

    render() {
        return (
            <NavMenu {...this.props} logout={this.logout}/>
        )
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setAuthUser, authThunk, logoutThunk})(NavMenuContainer);
