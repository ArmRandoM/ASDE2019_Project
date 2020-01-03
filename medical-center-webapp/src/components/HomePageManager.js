import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyHomePage from './BodyHomePage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class HomePageManager extends Component {

    constructor() {
        super();
        this.state = {
            name: "Bruce",
            surname: "Wayne",
            userToSearch: "",
            selectedUserToSearch: "",
            searchList: [],
        }
    }

    logOut = () => {

    }

    onUserToSearchSelected = () => {
        this.state.userToSearch = this.state.selectedUserToSearch;
        console.log("AAAAAAAAAAAA");
        MedicalCenterBaseIstance.post("/searchForUser", {city: this.state.selectedUserToSearch}).then((res) => {
            this.setState({
                searchList : res.data.searchResult
            })
        })
    }
      
    onUserToSearchChange = (event) => {
        this.setState({selectedUserToSearch: event.target.value});
        console.log("AAAAAAAAAAAA");
    }
      

    render() {
        return (
            <div>
                <MenuBar
                 logOut={this.state.logOut}
                 onUserToSearchSelected={this.state.onUserToSearchSelected}
                 onUserToSearchChange={this.state.onUserToSearchChange}/>
                <BodyHomePage
                    name={this.state.name}
                    surname={this.state.surname}/>
            </div>
        );
    }

}