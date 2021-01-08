import { Avatar, IconButton, Switch } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import { Component } from 'react';
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.checked !== this.state.checked) {
      this.setState({
        checked: this.state.checked
      })
    }
  }
  render() {

    return <div className={`Header ${this.state.checked && "dark"}`}>
      <Avatar />
      <div className="iconButtons">
        <IconButton>
          <DonutLarge />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
        <Switch checked={this.state.checked} onChange={e => this.setState({ checked: e.target.checked })} />
      </div>
    </div>;
  }
}

export default Header;
