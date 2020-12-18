import React, { Component } from 'react';
import "./Chat.scss";
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class Chat extends Component {
  render() {
    return <div className="Chat">
      <Header name="Talat El Beick" lastAccess="Online"/>
      <Content/>
      <Footer/>
    </div>;
  }
}

export default Chat;
