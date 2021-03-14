import React from 'react';
import NavMenu from "./NavMenu";
import {connect} from "react-redux";
import {authThunk, setAuthUser} from "../../../redux/auth-reducer";

class NavMenuContainer extends React.Component {

    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return (
            <NavMenu {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setAuthUser, authThunk})(NavMenuContainer);