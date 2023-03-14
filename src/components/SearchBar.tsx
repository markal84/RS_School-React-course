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
    console.log('saved query ', this.state.savedQuery);
  };

  componentDidMount(): void {
    console.log('mount');
    this.setState({
      savedQuery: localStorage.getItem('searchData'),
    });
  }

  componentDidUpdate(): void {
    console.log('update');
    localStorage.setItem('searchData', this.state.query);
  }

  componentWillUnmount(): void {
    console.log('unmount');
    this.setState({
      savedQuery: this.state.query,
    });
  }

  render() {
    console.log('render');

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="search"
            defaultValue={this.state.savedQuery}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSearch} disabled>
            Search
          </button>
        </div>
        <p>Last search query was: {this.state.savedQuery}</p>
      </div>
    );
  }
}
