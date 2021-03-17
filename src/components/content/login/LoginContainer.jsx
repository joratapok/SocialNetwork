import React from 'react';
import {connect} from "react-redux";
import {loginThunk, } from "../../../redux/auth-reducer";
import Login from "./Login"

class LoginContainer extends React.Component {

    onSubmit = (data) => {
      this.props.loginThunk(data)
    }

    render() {
        return (
            <Login onSubmit={this.onSubmit} />
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.postsPage.status,
})


export default connect(mapStateToProps, {loginThunk, })(LoginContainer)
