import React, { Component } from 'react';
import MenuBar from './MenuBar';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class MenuBarManager extends Component {
    
    constructor() {
        super();
        this.state = {
            search: "",
            searchResult:[],
        }
    }

    logOut = (event) =>{
        
    }

    goToProfile = (event) =>{
        
    }    
    
    makeSearch  = () => {
        console.log(this.state.search);
        MedicalCenterBaseIstance.post("/searchForUser", {city: this.state.search}).then((res) => {
            this.setState({
                searchResult : res.data
            })
        })
        /* go to search page manager with search result */
    }
      
    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    render() {
        return (
            <div>
                <MenuBar
                    logOut={this.logOut}
                    search={this.state.search}
                    onSearchChange={this.onSearchChange}
                    makeSearch={this.makeSearch}
                />
            </div>
        );
    }

}