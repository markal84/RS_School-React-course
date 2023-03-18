import React, { Component } from 'react';
// import Navbar from './Navbar';
// import IHeaderState from '../types/Header';

export default class Header extends Component {
  /*
  path: string = window.location.pathname;
  state: IHeaderState = {
    location: '',
  };

  componentDidMount(): void {
    this.setState({
      location: this.path,
    });
  }
  */

  render() {
    return (
      <>
        <div className="PageRouteDisplay">Current page: </div>
        <div className="Center Mb-2 Mt-2">
          <h1 className="Header-text">RS School React - week1 - Components</h1>
        </div>
      </>
    );
  }
}
