import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodySearchPage from './BodySearchPage';

export default class SearchPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
        }
    }

    logOut = (event) =>{
        
    }

    goToProfile = (event) =>{
        
    }

    render() {
        return (
            <div>
                <MenuBar
                    logOut={this.state.logOut}/>
                <BodySearchPage
                    goToProfile={this.state.goToProfile}/>
            </div>
        );
    }

}