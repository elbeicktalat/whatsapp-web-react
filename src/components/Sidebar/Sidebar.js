import React, { Component } from 'react';
import "./Sidebar.scss";
import Alert from '../Alert/Alert';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';
import Header from './Header/Header';
import { Refresh } from '@material-ui/icons';

class Sidebar extends Component {
  render() {
    //just for development 
    let contact = <Contact name="El Beick Talat" timeStamp="16:35" lastMessage="Are you ok?"/>;
    let contacts = [];
    for (let i = 0; i < 20; i++) {
    contacts.push(contact);  
    }

    return <div className="Sidebar">
      <Header/>
      <Alert image="" child={<Refresh/>}
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
