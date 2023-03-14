import React, { Component } from 'react';

interface ISearchBarState {
  query: string;
  savedQuery: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type Clickevent = React.MouseEvent<HTMLElement>;

export default class SearchBar extends Component<ISearchBarState> {
  state: ISearchBarState = {
    query: '',
    savedQuery: '',
  };

  handleChange = (e: InputEvent) => {
    console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  };

  handleSearch = (e: Clickevent) => {
    e.preventDefault();
    this.setState({
      savedQuery: this.state.query,
      query: '',
    });
    console.log(this.state.savedQuery);
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="search" onChange={this.handleChange} />
          <button type="button" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <p>Last search query was(will be picked up from local.storage): {this.state.savedQuery}</p>
      </div>
    );
  }
}
