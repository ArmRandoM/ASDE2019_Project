import React, { Component } from 'react';
import MenuBar from './MenuBar'
import Body from './Body'

class HomepageManager extends Component {

    render() {
        return (
            <div>
                <MenuBar/>
                <Body/>
            </div>
        );
    }

}

export default HomepageManager;