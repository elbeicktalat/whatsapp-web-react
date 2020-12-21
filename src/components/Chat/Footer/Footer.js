import { IconButton } from '@material-ui/core';
import { Attachment, EmojiEmotions } from '@material-ui/icons';
import React, { Component } from 'react';
import './Footer.scss';
import Form from './Form/Form';


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
      <Form/>
    </div>;
  }
}

export default Footer;
