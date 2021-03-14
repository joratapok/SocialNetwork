import {usersApi} from "../api/api";

export const rec_text_area = 'REC-TEXT-AREA'
export const add_post = 'ADD-POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initial = {
    posts: [
        {id: 1, post: 'Hi psina. I glad to see you in my home page. I hope that you feel yourself good and your mood want to dance', like: 0},
        {id: 2, post: 'It\'s my first post', like: 0},
    ],
    postNewText: 'write something ;)'
}

const postPageReducer = (state = initial, action) => {
    switch (action.type) {
        case (add_post) :
            let newObj = {
                id: 3,
                post: state.postNewText,
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newObj],
                postNewText:  '',
            }
        case (rec_text_area) : {
            return {
                ...state,
                postNewText: action.postAreaText,
            }
        }
        case (SET_USER_PROFILE) :
            return {
                ...state, user: action.user
            }

        default :
            return state
    }
}


export const addPostActionCreator = (text) =>  ({ type: rec_text_area, postAreaText: text })
export const addNewPostActionCreator = () => ({ type: add_post })
export const setUserProfile = (user) => ({ type: SET_USER_PROFILE, user  })

export const getProfile = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default postPageReducer