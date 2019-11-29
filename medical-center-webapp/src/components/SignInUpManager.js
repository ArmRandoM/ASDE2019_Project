import React, { Component } from 'react';
import SignInUp from './SignInUp'

class SignInUpManager extends Component {

    constructor() {
        super();
        this.state = {
            name: " ",
            surname: " ",
            email: " ",
            password: " ",
            signIn: true
        }
    }

    signSwitch = (event) => {
        if (event.target.name === 'signIn') {
            this.setState({
                signIn: false
            });
        }
        else {
            this.setState({
                signIn: true
            });
        }
    }

    render() {
        return (
            <div>
                <SignInUp signIn={this.state.signIn} signSwitch={this.signSwitch} />
            </div>
        );
    }
}

export default SignInUpManager;