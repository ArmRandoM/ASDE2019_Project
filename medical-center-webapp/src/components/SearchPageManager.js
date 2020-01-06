import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodySearchPage from './BodySearchPage';
import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class SearchPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            searchResult:[
                {name: 'Oliver Hansen', image: ''},
                {name: 'Van Henry', image: ''},
                {name: 'April Tucker', image: ''},
                {name: 'Ralph Hubbard', image: ''},
                {name: 'Omar Alexander', image: ''},
                {name: 'Carlos Abbott', image: ''},
            ],
        }
    }

    goToProfile = (name) =>{
        console.log(name);
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