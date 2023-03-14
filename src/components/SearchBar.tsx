import React, { Component } from 'react';

interface ISearchBarState {
  query: string;
}

type Inputevent = React.ChangeEvent<HTMLInputElement>;

export default class SearchBar extends Component<ISearchBarState> {
  state: ISearchBarState = {
    query: '',
  };

  handleChange = (event: Inputevent) => {
    console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="search" onChange={this.handleChange} />
          <button type="button">Search</button>
        </div>
        <p>State query: {this.state.query}</p>
      </div>
    );
  }
}
