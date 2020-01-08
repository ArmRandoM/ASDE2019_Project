import React, { Component } from 'react';
import MenuBar from './MenuBar';
//import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js';

export default class MenuBarManager extends Component {
    
    constructor() {
        super();
        this.state = {
            search: "",
            searchResult:[
                { status: "Doctor", name: "Darlena Lecroy",},
                { status: "Doctor", name: "Rozella Alford",},
                { status: "Patient", name: "Lianne Stanhope",},
                { status: "Doctor", name: "Reda Amador",},
                { status: "Patient", name: "Catherina Maillet",},
                { status: "Patient", name:  "Elfreda Schuette",},
                { status: "Patient", name: "Malvina Gunnerson",},
                { status: "Patient", name: "Logan Hake",},
                { status: "Doctor", name: "Song Lovely",},
                { status: "Doctor", name: "Chi Trammell",},
                { status: "Doctor", name: "Laurel Hille",},
                { status: "Patient", name: "Erasmo Masser",},
                { status: "Patient", name: "Aretha Drapeau",},
                { status: "Doctor", name: "Shawnna Huntzinger",},
                { status: "Patient", name: "Barabara Rech",},
                { status: "Doctor", name: "Lynda Tuller",},
                { status: "Patient", name: "Nickolas Loew",},
                { status: "Doctor", name: "Rosario Wallington",},                
            ],
        }
    }
    
    logOut = (event) =>{
        
    }

    goToProfile = (event) =>{
        
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
        return (
            <div>
                <MenuBar
                    logOut={this.logOut}
                    search={this.state.search}
                    goToProfile={this.goToProfile}
                    onSearchChange={this.onSearchChange}
                    makeSearch={this.makeSearch}
                    searchResult={this.state.searchResult}
                />
            </div>
        );
    }

}