import React, { Component } from 'react';
import Message from '../Message/Message';
import './Content.scss';

class Content extends Component {
  render() {
    return <div className="Content">
      { /* here where the data messages will be fetched */ }
      <Message sent={false} 
      content="Who are you?"
      timeStamp="14:59"/>
      <Message sent={true} 
      content="I'am Talat El Beick from Italy and I'm a software developer"
      timeStamp="15:00"/>
    </div>;
  }
}

export default Content;
