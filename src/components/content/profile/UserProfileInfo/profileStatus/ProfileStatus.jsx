import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: !this.props.aboutMe
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: true
        })

    }

    render() {
        debugger
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.aboutMe}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deActivateEditMode} placeholder="write status" type="text" value={this.props.aboutMe}/>
                    <button>Obublicovat</button>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;