import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import React, { Component } from 'react';
import Alert from '../Alert/Alert';
import "./Sidebar.scss";

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
    </div>;
  }
}

export default Sidebar;
