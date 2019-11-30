import React, { Component } from 'react';
import Menu from './Menu'
import Body from './Body'

class HomepageManager extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Body/>
            </div>
        );
    }

}

export default HomepageManager;