import postPageReducer, {add_post, rec_text_area} from "./profile-reducer";
import dialogsReducer, {add_message, rec_message_area} from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, message: 'First message'},
                {id: 2, message: 'Second message v rot kompot ne pishi mne bolshe'},
                {id: 3, message: 'Third message'},
            ],
            people: [
                {id: 1, name: 'Marina'},
                {id: 2, name: 'Maksim'},
                {id: 3, name: 'Dmitry'},
                {id: 4, name: 'Pes'},
            ],
            postNewMessage: ''
        },
        postsPage: {
            posts: [
                {id: 1, post: 'Hi psina. I glad to see you in my home page. I hope that you feel yourself good and your mood want to dance', like: 0},
                {id: 2, post: 'It\'s my first post', like: 0},
            ],
            postNewText: 'write something ;)'
        },
        sideBar: {
            avatar: 'some.source.com',
            menu: ['Profile','Messages', 'News', 'Music', 'Settings'],
        },
    },
    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.postsPage = postPageReducer(this._state.postsPage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this)
    }

}

export default store