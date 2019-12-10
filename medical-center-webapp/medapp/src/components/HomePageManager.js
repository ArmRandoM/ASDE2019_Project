import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyHomePage from './BodyHomePage';

export default class HomePageManager extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    logOut = () => {

    }

    render() {
        return (
            <div>
                <MenuBar
                 logOut={this.state.logOut}/>
                <BodyHomePage/>
            </div>
        );
    }

}