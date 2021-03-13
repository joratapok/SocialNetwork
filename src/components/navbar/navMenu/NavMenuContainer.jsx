import React from 'react';
import NavMenu from "./NavMenu";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../../redux/auth-reducer";

class NavMenuContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUser(response.data.data)
                }

            })
    }

    render() {
        return(
            <NavMenu {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps,{setAuthUser})(NavMenuContainer);