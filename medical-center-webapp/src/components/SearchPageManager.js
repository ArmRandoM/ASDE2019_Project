import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodySearchPage from './BodySearchPage';

export default class SearchPageManager extends Component {
    
    constructor() {
        super();
        this.state = {
            searchResult:[],
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
                    logOut={this.logOut}/>
                <BodySearchPage
                    goToProfile={this.goToProfile}
                    searchResult={this.state.searchResult}/>
            </div>
        );
    }

}

/*
    constructor() {
        super();
        this.state = {
            userToSearch: "",
            selectedUserToSearch: "",
            searchList: [],
        }
    }

    onUserToSearchSelected = () => {
        this.state.userToSearch = this.state.selectedUserToSearch;
        MedicalCenterBaseIstance.post("/searchForUser", {city: this.state.selectedUserToSearch}).then((res) => {
            this.setState({
                searchList : res.data.searchResult
            })
        })
    }
      
    onUserToSearchChange = (event) => {
        this.setState({selectedUserToSearch: event.target.value});
    }

*/