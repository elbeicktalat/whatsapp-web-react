import React, { Component } from 'react';
import "./Chat.scss";
import Header from './Header/Header';
import Content from './Content/Content';

class Chat extends Component {
  render() {
    return <div className="Chat">
      <Header name="Talat El Beick" lastAccess="Online"/>
      <Content/>
    </div>;
  }
}

export default Chat;
