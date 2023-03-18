import React, { Component } from 'react';

export default class Header extends Component {
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
