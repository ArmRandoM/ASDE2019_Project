import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodySearchPage from './BodySearchPage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class SearchPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            searchResult:[],
        }
    }

    goToProfile = (event) =>{
        
    }    
    
    render() {
        return (
            <div>
                <BodySearchPage
                    goToProfile={this.goToProfile}
                    searchResult={this.state.searchResult}/>
            </div>
        );
    }

}