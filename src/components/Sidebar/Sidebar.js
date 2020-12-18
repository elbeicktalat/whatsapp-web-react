import React, { Component } from 'react';
import "./Sidebar.scss";
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import Alert from '../Alert/Alert';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';

class Sidebar extends Component {
  render() {
    return <div className="Sidebar">
      <div className="header">
        <div className="avatar">
          <Avatar/>
        </div>
        <div className="iconButtons">
          <IconButton>
            <DonutLarge/>
          </IconButton>
          <IconButton>
            <Chat/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <Alert/>
      <Search/>
      <div className="contactList">
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
        <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>
      </div>
    </div>;
  }
}

export default Sidebar;
