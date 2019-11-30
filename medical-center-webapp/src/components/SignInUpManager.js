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
            signIn: true,
            patient: true
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

    patientSwitch = (event) => {
        if (event.target.name === 'patient') {
            this.setState({
                patient: false
            });
        }
        else {
            this.setState({
                patient: true
            });
        }
    }

    render() {
        return (
            <div>
                <SignInUp
                    signIn={this.state.signIn}
                    signSwitch={this.signSwitch}
                    patient={this.state.patient}
                    typeSwitch={this.patientSwitch}
                />
            </div>
        );
    }
}

export default SignInUpManager;