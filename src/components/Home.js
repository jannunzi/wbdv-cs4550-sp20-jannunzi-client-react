import React from "react";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Home</h1>
                <a href="/register">
                    Register
                </a>
                <br/>
                <a href="/profile">
                    Profile
                </a>
            </div>
        )
    }
}
