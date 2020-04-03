import React from "react";
import {profile} from "../../services/UserService";

export default class Profile extends React.Component {

    state = {
        profile: {
            username: ''
        }
    }

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
            </div>
        )
    }
}
