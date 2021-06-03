import React from 'react'
import { DialogsActions } from '../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage
    }
}

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, { sendMessage: DialogsActions.addNewMessage }),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer
