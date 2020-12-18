import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./Alert.scss";

class Alert extends Component {
  render() {
    return <div className="Alert">
      <div className="avatar"><Avatar/></div>
      <div className="content">
        <p className="title">There are an update avelible</p>
        <p>Click here to update Whatsapp</p>
      </div>
    </div>;
  }
}

export default Alert;
