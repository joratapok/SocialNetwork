import React from 'react'
import postPageReducer, {addNewPost} from "./postsPage-reducer";

let state = {
    posts: [
        {id: 0, post: 'It my second post', like: 0},
        {id: 1, post: 'It\'s my first post', like: 0},
    ]
}

it('length newState should be incremented', () => {
    let action = addNewPost('test')
    let newState = postPageReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('text new post should be equal text in action', () => {
    let action = addNewPost('test')
    let newState = postPageReducer(state, action)
    expect(newState.posts[2].post).toBe('test')
})