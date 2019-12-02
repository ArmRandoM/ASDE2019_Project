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
        /*var nameSurnameReg = /\[A-Za-z]+/;
        var nameTest = nameSurnameReg.test(this.state.name);
        var surnameTest = nameSurnameReg.test(this.state.surname);

        var passwordReg = /[a-zA-Z0-9-?!@#\$%\^&\* ]{8,}/;
        var passwordTest = passwordReg.test(this.state.passwordSignUp);

        var emailReg = /.+@.+\..+/;
        var validEmailTest = emailReg.test(this.state.emailSignUp);*/

        MedicalCenterBaseIstance.post("/signUp", {name: this.state.name, surname: this.state.surname,
           email:this.state.emailSignUp, password:this.state.passwordSignUp }).then((res) => {
            this.setState({
              passwordErrorSignUp: res.data
            })
        })
        console.log(this.state.passwordErrorSignUp);
        /*this.setState({
            passwordErrorSignUp: !passwordTest,
            invalidEmailErrorSignUp: !validEmailTest,
            nameOrSurnameError: !(nameTest && surnameTest),
        });*/

        event.preventDefault();
    }

    login = (event) => {
        console.log(this.state.emailSignIn);

        MedicalCenterBaseIstance.post("/login", {email: this.state.emailSignIn, password: this.state.passwordSignIn} ).then((res) => {
            this.setState({
              passwordErrorSignUp: res.data
            })
        })
        console.log(this.state.passwordErrorSignUp);

      /*this.setState({
            passwordErrorSignUp: !passwordTest,
            invalidEmailErrorSignUp: !validEmailTest,
            nameOrSurnameError: !(nameTest && surnameTest),
        });*/

        event.preventDefault();
    }

    onChange = (event) => {
      console.log(event.target.name);
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
                    login={this.login}
                    nameOrSurnameError={this.state.nameOrSurnameError}
                    invalidEmailErrorSignUp={this.state.invalidEmailErrorSignUp}
                    passwordErrorSignUp={this.state.passwordErrorSignUp}
                />
            </div>
        );
    }
}

export default SignInUpManager;
