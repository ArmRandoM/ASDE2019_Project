import React, { Component } from 'react';
import MenuBar from './MenuBar';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'
import { Redirect } from 'react-router';
import PropTypes from "prop-types";
import SearchPageManager from './SearchPageManager';

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
        /*
        MedicalCenterBaseIstance.post("/searchForUser", {search: this.state.search}).then((res) => {
            this.setState({
                searchResult : res.data
            })
        })
        */
        window.location.assign("/searchpg");
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