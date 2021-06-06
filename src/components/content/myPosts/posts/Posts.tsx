import React from 'react'
import classes from './Posts.module.css'
import Post from '../post/Post'
import heart from '../../../../assets/images/heart.png'
import { postsType } from '../../../../types/types'

type PropsType = {
    posts: Array<postsType>
    photo: string | null
}

// eslint-disable-next-line react/display-name
const Posts: React.FC<PropsType> = React.memo(props => {
    return (
        <div className={classes.wrapAll}>
            {props.posts.map(item => {
                return (
                    <div key={item.id} className={classes.wrap}>
                        <div className={classes.postHeader}>
                            <div className={classes.postAvatar}>
                                <img className={classes.avatar}
                                    src={props.photo ? props.photo : undefined}
                                    alt="avatar"/>
                            </div>
                            <div className={classes.postLike}>
                                <img src={heart}/>
                            </div>
                        </div>

                        <Post message={item.post}/>

                        <div className={classes.postFooter}>
                        </div>
                    </div>
                )
            }).reverse()}
        </div>
    )
})

export default Posts
