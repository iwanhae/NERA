import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : null
        };
    }
    render() {
        const {username} = this.state;
        return (
            <div className="Login">
                {username ? `Login ${username}` : `Login world`}
            </div>
        );
    }
}
export default Login