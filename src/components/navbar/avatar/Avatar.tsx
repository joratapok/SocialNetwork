import React from 'react';
import classes from './Avatar.module.css'
import defaultUser from '../../../assets/images/defaultUser.png'
import banner from '../../../assets/images/banner-small.jpg'
import Preloader from "../../preloader/Preloader";
import {RouteComponentProps} from "react-router-dom";

type mapSateToPropsType = {
    photo: string | null
    inProgress: boolean
}
type MapDispatchToPropsType = {
    savePhoto: () => void
}
type PathParamsType = {
    pathname: string
}
type AvatarPropsType = mapSateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

const Avatar: React.FC<AvatarPropsType> = (props) => {

    const drawAvatar = () => {
        return props.photo
            ? <img src={props.photo} alt="avatar"/>
            : <>
                <img className={classes.miniBanner} src={banner} alt=""/>
                <img className={classes.miniAvatar} src={defaultUser} alt=""/>
            </>
    }

    return (
        <div className={classes.divAvatar}>
            {(props.inProgress) ? <Preloader/> : null}
            <div className={classes.backAvatar}>
                {props.location.pathname === '/profile'
                    ? <img className={classes.avatar} alt="avatar"
                           src={props.photo ? props.photo : defaultUser}/>
                    : drawAvatar()
                }
            </div>
        </div>
    )
}

export default Avatar