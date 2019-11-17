import React, { Component } from 'react';
import './header.css';
import { loginRoute } from '../../router/route-constants';

class Header extends Component {

  logout = () => {
    window.location.href = `/${loginRoute}`
  }

  render() {
    return (
      <header className="app-header">
        <span>Star Wars</span>
        <div className="pull-right app-header__logout">
          <span onClick={this.logout}>Logout</span>
        </div>
      </header >);
  }
}

export default Header;
