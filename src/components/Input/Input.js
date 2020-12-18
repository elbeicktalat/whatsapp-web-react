import React, { Component } from 'react';
import "./Input.scss";

class Input extends Component {
  render() {
    return <div className="Input">
      <input type="text" placeholder={this.props.placeholder}/>
    </div>;
  }
}

export default Input;
