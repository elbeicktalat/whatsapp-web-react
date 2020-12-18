import React, { Component } from 'react';
import './Search.scss';
import { SearchOutlined } from '@material-ui/icons';
import Input from '../Input/Input';

class Search extends Component {
  render() {
    return <div className="Search">
      <div className="content">
        <SearchOutlined/>
        <div className="input">
          <Input placeholder="Type here to search"/>
        </div>
      </div>
    </div>;
  }
}

export default Search;
