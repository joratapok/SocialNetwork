import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


export const withAuthRedirect = (Component: React.ComponentType) => {
    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps}/>
    }

    let mapStateToProps = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
    })

    type MapStatePropsType = ReturnType<typeof mapStateToProps>

    return connect(mapStateToProps)(RedirectComponent)
}