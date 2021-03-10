import React from 'react';
import classes from './Posts.module.css'
import Post from "../post/Post";


const Posts = (props) => {
    return(
    	<div className={classes.wrapAll}>

            {props.posts.map(item => {
            //debugger
            return (
                <div className={classes.wrap}>
                    <div className={classes.postHeader}>
                        <div className={classes.postAvatar}>
                            <img className={classes.avatar}
                             src="https://media.geeksforgeeks.org/wp-content/uploads/20210209004413/AVATAR2.png" alt=""/>
                        </div>
                        <div className={classes.postLike}>
                        <img src='https://icon-icons.com/icons2/548/PNG/48/1455554742_line-58_icon-icons.com_53376.png'/>
                        </div>
                    </div>

                    <Post message={item.post} />

                    <div className={classes.postFooter}>
                    </div>
                </div>
                )
            }).reverse()}
    	</div>
    )}


export default Posts;