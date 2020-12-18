import { IconButton, Input } from '@material-ui/core';
import { Attachment, EmojiEmotions, Mic } from '@material-ui/icons';
import React, { Component } from 'react';
import './Footer.scss';


class Footer extends Component {
  render() {
    return <div className="Footer">
      <div className="iconButtons">
        <IconButton>
          <EmojiEmotions/>
        </IconButton>
        <div id="attachFile">
          <IconButton>
            <Attachment/>
          </IconButton>
        </div>
      </div>
      <div className="input">
       <input type="text" placeholder="Type here your message"/>
      </div>
      <IconButton><Mic/></IconButton>
    </div>;
  }
}

export default Footer;
