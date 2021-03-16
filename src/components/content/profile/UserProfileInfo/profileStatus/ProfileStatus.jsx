import React from 'react';
import classes from './ProfileStatus.module.css'



class ProfileStatus extends React.Component {
    state = {
        editMode: !this.props.status,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.state.status)
    }

    changeStatus = (event) => {
      this.setState({
          status: event.target.value
      })
    }

    updateStatus = () => {
      debugger
      this.props.setStatus(this.state.status)
    }

    componentDidMount(prevProps, prevState) {
      debugger
      if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        })
      }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.changeStatus} onBlur={this.deActivateEditMode}
                    placeholder="write status" value={this.state.status} />
                    <div className={classes.buttonWrap}>
                        <button onClick={ this.updateStatus } className={classes.button}>
                            Obublicovat
                        </button>
                    </div>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;
