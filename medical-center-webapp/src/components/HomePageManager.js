import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyHomePage from './BodyHomePage';

export default class HomePageManager extends Component {

    constructor() {
        super();
        this.state = {
            name: "Bruce",
            surname: "Wayne",
        }
    }

    logOut = () => {

    }

    render() {
        return (
            <div>
                <MenuBar
                 logOut={this.state.logOut}/>
                <BodyHomePage
                    name={this.state.name}
                    surname={this.state.surname}/>
            </div>
        );
    }

}