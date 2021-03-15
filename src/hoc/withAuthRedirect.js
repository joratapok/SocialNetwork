import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }
    let mapStateToProps = (state) => ({
        auth: state.auth
    })

    return connect(mapStateToProps)(RedirectComponent)
}