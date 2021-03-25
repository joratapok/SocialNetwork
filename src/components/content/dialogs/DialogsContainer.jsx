import React from 'react';
import {addNewMessage} from "../../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}


const DialogsContainer = compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect,
)(Dialogs)

export default DialogsContainer;
