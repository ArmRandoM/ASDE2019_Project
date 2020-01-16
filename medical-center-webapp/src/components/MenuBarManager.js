import React, { Component } from 'react';
import MenuBar from './MenuBar';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js';

export default class MenuBarManager extends Component {
    
    constructor() {
        super();
        this.state = {
            search: "",
            searchResult:[],
            logOut: false,
            followOperationComplete: true,
        }
    }
    
    logOut = (event) =>{
        localStorage.clear(); 
        window.location.href = "/";
    }

    followOperation = (user,i) =>{
        MedicalCenterBaseIstance.post("/followOperation", {user: user}).then((res) => {
            if(res.data){
                var usersArray = Array.from(this.state.searchResult);
                for (var j in usersArray) {
                    if (j == i) {
                        usersArray[i].followed = !usersArray[i].followed;
                    break;
                    }
                }
                this.setState({
                    searchResult: usersArray
                });
            }
        })
    } 
           
    makeSearch  = () => {
        console.log(this.state.search);
        MedicalCenterBaseIstance.post("/searchForUser", {search: this.state.search}).then((res) => {
            this.setState({
                searchResult : res.data
            })
        })
    }
      
    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    goToProfile = (name) =>{
        console.log(name);
    }  


    render() {
        if(this.state.logOut){
            window.location.href = "/";
        }
        else{

        }
        return (
            <div>
                <MenuBar
                    logOut={this.logOut}
                    search={this.state.search}
                    followOperation={this.followOperation}
                    onSearchChange={this.onSearchChange}
                    makeSearch={this.makeSearch}
                    searchResult={this.state.searchResult}
                />
            </div>
        );
    }

}