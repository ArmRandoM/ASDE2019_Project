import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyProfilePage from './BodyProfilePage';

export default class ProfilePageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            name: " Bruce ",
            surname: " Wayne ",
            email: " battilemani@batman.bat ",
            password: "batmanèilpiufigo",
            status: "doctor",
        }
    }
    //status: patient/doctor/_

    modifyData = (event) =>{
        
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <BodyProfilePage
                    name={this.state.name}
                    surname={this.state.surname}
                    email={this.state.email}
                    password={this.state.password}
                    status={this.state.status}
                    modifyData={this.modifyData}
                    onChange={this.onChange}/>
            </div>
        );
    }

}