import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./Alert.scss";

class Alert extends Component {
  render() {
    return <div className="Alert" style={this.props.style}>
      <div className="avatar">
        <Avatar src={this.props.image}>
          {this.props.child}
        </Avatar>
      </div>
      <div className="content">
        <p className="title">{this.props.title}</p>
        <p>{this.props.paregraph}</p>
      </div>
    </div>;
  }
}

export default Alert;
