import React from 'react'
import postPageReducer, { addNewPost } from './profile-reducer'

const state = {
    posts: [
        { id: 0, post: 'It my second post', like: 0 },
        { id: 1, post: 'It\'s my first post', like: 0 }
    ]
}

it('length newState should be incremented', () => {
    const action = addNewPost('test')
    const newState = postPageReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('text new post should be equal text in action', () => {
    const action = addNewPost('test')
    const newState = postPageReducer(state, action)
    expect(newState.posts[2].post).toBe('test')
})
