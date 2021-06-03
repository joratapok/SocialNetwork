import React from 'react'
import NavMenu from './NavMenu'
import { connect } from 'react-redux'
import { logoutThunk } from '../../../redux/auth-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { compose } from 'redux'

export type MapStatePropsType = {
    login: null | string
    isAuth: boolean
}

export type MapDispatchPropsType = {
    logoutThunk: () => void
}

const NavMenuContainer: React.FC<MapStatePropsType & MapDispatchPropsType> =
    ({ login, logoutThunk, isAuth }) => {
        const logout = () => {
            logoutThunk()
        }

        return (
            <NavMenu login={login} logout={logout} isAuth={isAuth}/>
        )
    }

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

const Nav = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps,
        { logoutThunk }))(NavMenuContainer)

export default Nav
