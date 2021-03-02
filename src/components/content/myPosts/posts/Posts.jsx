import React from 'react';
import classes from './Posts.module.css'
import Post from "../post/Post";


const Posts = () => {

    let posts = [
        {id: 1, post: 'Hi psina'},
        {id: 2, post: 'It\'s my first post'},
    ]

    return(
    	<div className='{classes.wrap}'>
    	{posts.map(item => {
    	return (
    		<div className='{classes.wrap}'>
	    		<div className='{classes.Header}'>
	        		<div className={classes.postAvatar}>
	                	<img className={classes.avatar}
	                     src="https://media.geeksforgeeks.org/wp-content/uploads/20210209004413/AVATAR2.png" alt=""/>
	            	</div>
	        	</div>

	        	
	            <Post message={item.post} />
	            

	            <div className='{classes.postFooter}'>
	            	like - 0
	            </div>
	        </div>
    		)
    	})}


    	</div>

        
    )}


export default Posts;