import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  render() {
    return <div className={`Message ${this.props.sent && "sent-message"}`}>
        <div className="content">
          {this.props.content}
        </div>
        <div className="timeStamp">{this.props.timeStamp}</div>
      </div>;
  }
}

export default Message;
