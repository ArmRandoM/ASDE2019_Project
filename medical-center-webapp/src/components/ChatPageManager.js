import React, { Component } from 'react';
import MenuBar from './MenuBar';
import BodyChatPage from './BodyChatPage';

export default class ChatPageManager extends Component {
   
    constructor() {
        super();
        this.state = {
            chats: [],
            messages: [],
            messageToSend: " ",
        }
    }

    getChats = () => {

    }

    getMessages = (event) => {

    }

    addChat = (event) => {

    }

    sendMessage = (event) => {

    }

    handleChange(e) {
        this.setState({
            messageToSend: e.target.value
        })
    }

    logOut = () => {

    }

    render() {
        return (
            <div>
                <MenuBar
                 logOut={this.state.logOut}/>
                <BodyChatPage
                 getChats={this.state.getChats}
                 addChats={this.state.addChats}
                 getMessages={this.state.getMessages}
                 sendMessage={this.state.sendMessage}
                 handleChange={this.state.handleChange}/>
            </div>
        );
    }

}

               
