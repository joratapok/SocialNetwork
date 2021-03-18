import React from 'react';
import {connect} from "react-redux";
import {loginThunk, } from "../../../redux/auth-reducer";
import Login from "./Login"
import Redirect from "react-router-dom/es/Redirect";

class LoginContainer extends React.Component {

    onSubmit = (data) => {
      this.props.loginThunk(data)
    }

    render() {
        if (this.props.auth) {
            return <Redirect to={'/profile'} />
        }

        return (
            <Login onSubmit={this.onSubmit} />
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.postsPage.status,
    auth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginThunk, })(LoginContainer)
