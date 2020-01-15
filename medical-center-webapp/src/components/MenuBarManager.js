import React, { Component } from 'react';
import MenuBar from './MenuBar';
//import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js';

export default class MenuBarManager extends Component {
    
    constructor() {
        super();
        this.state = {
            search: "",
            searchResult:[
                { status: "Doctor", name: "Darlena Lecroy", followed: true},
                { status: "Doctor", name: "Rozella Alford", followed: false},
                { status: "Patient", name: "Lianne Stanhope", followed: false},
                { status: "Doctor", name: "Reda Amador", followed: true},
                { status: "Patient", name: "Catherina Maillet", followed: false},
                { status: "Patient", name:  "Elfreda Schuette", followed: false},
                { status: "Patient", name: "Malvina Gunnerson", followed: false},
                { status: "Patient", name: "Logan Hake", followed: true},
                { status: "Doctor", name: "Song Lovely", followed: true},
                { status: "Doctor", name: "Chi Trammell", followed: false},
                { status: "Doctor", name: "Laurel Hille", followed: false},
            ],
            logOut: false,
            followOperationComplete: true,
        }
    }
    
    logOut = (event) =>{
        localStorage.clear(); 
        window.location.href = "/";
    }

    followOperation = (user,i) =>{
        /*
        MedicalCenterBaseIstance.post("/followOperation", {user: user}).then((res) => {
            this.setState({
                followOperationComplete : res.data
            })
        })
        */
       if(this.state.followOperationComplete){
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

    } 
           
    
    makeSearch  = () => {
        console.log(this.state.search);
        /*
        MedicalCenterBaseIstance.post("/searchForUser", {search: this.state.search}).then((res) => {
            this.setState({
                searchResult : res.data
            })
        })
        */
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