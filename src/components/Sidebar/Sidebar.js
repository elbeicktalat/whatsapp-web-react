import React, { Component } from 'react';
import "./Sidebar.scss";
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import Alert from '../Alert/Alert';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';

class Sidebar extends Component {
  render() {
    //just for development 
    let contact = <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>;
    let contacts = [];
    for (let i = 0; i < 20; i++) {
    contacts.push(contact);  
    }

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
      <Alert style={}image=""
      title="There are an update avelible" 
      paregraph="Click here to update Whatsapp"/>
      <Search/>
      <div className="contactList">
         {/* here where the contacts will be fetched from database */}
        {contacts}
      </div>
    </div>;
  }
}

export default Sidebar;
