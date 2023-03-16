import React, { Component } from 'react';
import Navbar from './Navbar';
import IHeaderState from '../types/Header';

export default class Header extends Component<IHeaderState> {
  path: string = window.location.pathname;
  state: IHeaderState = {
    location: '',
  };

  componentDidMount(): void {
    this.setState({
      location: this.path,
    });
  }

  render() {
    return (
      <>
        <div className="Header">Current page: {this.state.location}</div>
        <Navbar />
      </>
    );
  }
}
