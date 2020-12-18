import { Avatar, IconButton } from '@material-ui/core';
import { MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return <div className="Header">
      <Avatar/>
      <div className="info">
        <div className="name">{this.props.name}</div>
        <div className="lastAccess">{this.props.lastAccess}</div>
      </div>
      <div className="iconButtons">
        <IconButton>
         <SearchOutlined/>
        </IconButton>
        <IconButton>
          <MoreVert/>
        </IconButton>
      </div>
    </div>;
  }
}

export default Header;
