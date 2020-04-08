import React from "react";
import {login} from "../../services/UserService";

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    login = (user) =>
        login(user)
            .then(currentUser => this.props.history.push('/profile'))

    render() {
        return(
            <div>
                <h1>Login</h1>
                <input
                    value={this.state.username}
                    onChange={(e) => this.setState({
                        username: e.target.value
                    })}
                    className="form-control"
                    placeholder="username"/>
                <input
                    value={this.state.password}
                    onChange={(e) => this.setState({
                        password: e.target.value
                    })}
                    className="form-control"
                    type="password"
                    placeholder="password"/>

                <button
                    onClick={() => this.login(this.state)}
                    className="btn btn-primary btn-block">
                    Login
                </button>
            </div>
        )
    }
}
