import React, { Component } from 'react';
import SignInUp from './SignInUp'
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'
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
            signInError: false,
            signUpError: false,
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
            signIn: !this.state.signIn,
            passwordErrorSignUp: false,
            invalidEmailErrorSignUp: false,
            nameOrSurnameError: false,
            signInError: false,
            signUpError: false
        });
    }

    submitSignUp = (event) => {
        var nameSurnameReg = /[A-Za-z]+/;
        var nameTest = nameSurnameReg.test(this.state.name);
        var surnameTest = nameSurnameReg.test(this.state.surname);

        var passwordReg = /[a-zA-Z0-9-?!@#$%^&* ]{8,}/;
        var passwordTest = passwordReg.test(this.state.passwordSignUp);

        var emailReg = /.+@.+\..+/;
        var emailTest = emailReg.test(this.state.emailSignUp);

        this.setState({
            passwordErrorSignUp: !passwordTest,
            invalidEmailErrorSignUp: !emailTest,
            nameOrSurnameError: !(nameTest && surnameTest),
        });

        if (surnameTest && passwordTest && emailTest && passwordTest) {
            MedicalCenterBaseIstance.post("/signUp", {
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.emailSignUp,
                password: this.state.passwordSignUp
            }).then((res) => {
                this.setState({
                    signUpError: !res.data
                })
            })
        }

        event.preventDefault();
    }

    submitSignIn = (event) => {
        MedicalCenterBaseIstance.get("/signIn", {
            params: {
                "email": this.state.emailSignIn,
                "password": this.state.passwordSignIn
            }
        }).then((res) => {
            this.setState({
                signInError: !res.data
            })
        })

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
                    submitSignIn={this.submitSignIn}
                    signInError={this.state.signInError}
                    signUpError={this.state.signUpError}
                    nameOrSurnameError={this.state.nameOrSurnameError}
                    invalidEmailErrorSignUp={this.state.invalidEmailErrorSignUp}
                    passwordErrorSignUp={this.state.passwordErrorSignUp}
                />
            </div>
        );
    }
}

export default SignInUpManager;
