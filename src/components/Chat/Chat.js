import React, { Component } from 'react';
import "./Chat.scss";
import Header from './Header/Header';

class Chat extends Component {
  render() {
    return <div className="Chat">
      <Header name="Talat El Beick" lastAccess="Online"/>
    </div>;
  }
}

export default Chat;
