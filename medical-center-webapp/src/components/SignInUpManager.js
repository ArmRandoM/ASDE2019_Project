import React, { Component } from 'react';
import SignInUp from './SignInUp'

class SignInUpManager extends Component {

    constructor() {
        super();
        this.state = {
            name: " ",
            surname: " ",
            emailSignIn: " ",
            passwordSignIn: " ",
            emailSignUp: " ",
            passwordSignUp: " ",
            nameOrSurnameError: false,
            invalidEmailErrorSignUp: false,
            passwordErrorSignUp: false,
            signIn: true,
            patient: true
        }
    }

    patientSwitch = () => {
        this.setState({
            patient: !this.state.patient
        });
    }

    signSwitch = () => {
        this.setState({
            signIn: !this.state.signIn
        });

        this.setState({
            passwordErrorSignUp: false,
            invalidEmailErrorSignUp: false,
            nameOrSurnameError: false
        });
    }

    submitSignUp = (event) => {
        var nameSurnameReg = /\[A-Za-z]+/;
        var nameTest = nameSurnameReg.test(this.state.name);
        var surnameTest = nameSurnameReg.test(this.state.surname);

        var passwordReg = /[a-zA-Z0-9-?!@#\$%\^&\* ]{8,}/;
        var passwordTest = passwordReg.test(this.state.passwordSignUp);

        var emailReg = /.+@.+\..+/;
        var validEmailTest = emailReg.test(this.state.emailSignUp);

        this.setState({
            passwordErrorSignUp: !passwordTest,
            invalidEmailErrorSignUp: !validEmailTest,
            nameOrSurnameError: !(nameTest && surnameTest),
        });

        event.preventDefault();
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <SignInUp
                    signIn={this.state.signIn}
                    signSwitch={this.signSwitch}
                    patient={this.state.patient}
                    typeSwitch={this.patientSwitch}
                    onChange={this.onChange}
                    submitSignUp={this.submitSignUp}
                    nameOrSurnameError={this.state.nameOrSurnameError}
                    invalidEmailErrorSignUp={this.state.invalidEmailErrorSignUp}
                    passwordErrorSignUp={this.state.passwordErrorSignUp}
                />
            </div>
        );
    }
}

export default SignInUpManager;