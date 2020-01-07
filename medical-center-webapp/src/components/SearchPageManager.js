import React, { Component } from 'react';
import BodySearchPage from './BodySearchPage';
//import MedicalCenterBaseIstance from '../medical-center-service/MedicalCenterBaseInstance.js'

export default class SearchPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            users:[
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

    setSearchResult = (users) =>{
        this.state.users = users;
    }
    
    render() {
        return (
            <div>
                <BodySearchPage
                    goToProfile={this.goToProfile}
                    users={this.state.users}/>
            </div>
        );
    }

}