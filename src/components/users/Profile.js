import React from "react";
import {profile, logout} from "../../services/UserService";

export default class Profile extends React.Component {

    state = {
        profile: {
            username: ''
        }
    }

    logout = () => logout()
        .then(status => this.props.history.push("/"))

    componentDidMount() {
        profile()
            .then(profile => this.setState({
                profile: profile
            }))
    }

    render() {
        return(
            <div>
                <h1>Profile</h1>
                Hi {this.state.profile.username}!

                <hr/>

                <button onClick={this.logout}>
                    Logout
                </button>
            </div>
        )
    }
}
