import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyMyProfilePage from './BodyMyProfilePage';

export default class ProfilePageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            name: " Bruce ",
            surname: " Wayne ",
            email: " battilemani@batman.bat ",
            password: "batmanèilpiufigo",
        }
    }

    logOut = (event) =>{
        
    }

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
                <MenuBar
                    logOut={this.state.logOut}/>
                <BodyMyProfilePage
                    name={this.state.name}
                    surname={this.state.surname}
                    email={this.state.email}
                    password={this.state.password}
                    modifyData={this.state.modifyData}
                    onChange={this.state.onChange}/>
            </div>
        );
    }

}