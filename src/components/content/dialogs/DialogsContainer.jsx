import React from 'react';
import {addNewMessage} from "../../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


/*const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let messagesPage = store.getState().messagesPage
                let addNewMessage = () => {
                    store.dispatch(addNewMessageActionCreator())
                }

                let changeMessageArea = (text) => {
                    store.dispatch(changeAreaMessageActionCreator(text))
                }
                return (
                    <Dialogs addNewMessage={addNewMessage}
                             changeMessageArea={changeMessageArea}
                             messagesPage={messagesPage}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}*/

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
