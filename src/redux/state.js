import {renderEntireTree} from "../renderEntireTree";


let state = {
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
    },
    postsPage: {
        posts: [
            {id: 1, post: 'Hi psina. I glad to see you in my home page. I hope that you feel yourself good and your mood want to dance', like: 0},
            {id: 2, post: 'It\'s my first post', like: 0},
        ]
    },
}

export let addPost = (newPost) => {
    let newObj = {
        id: 3,
        post: newPost,
        like: 0,
    }

    state.postsPage.posts.push(newObj)
    renderEntireTree(state)
}


export default state