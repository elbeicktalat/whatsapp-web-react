import { Avatar, Button } from '@material-ui/core';
import React, { Component } from 'react';
import './Contact.scss';


class Contact extends Component {
  render() {
    return <div className="Contact">
      <Button>
        <Avatar/>
        <div className="content">
          <div className="info">
            <div className="name">{this.props.name}</div>
            <div className="timeStamp">{this.props.timeStamp}</div>
          </div>
          <div className="lastMessage">{this.props.lastMessage}</div>
        </div>
      </Button>
    </div>;
  }
}

export default Contact;
