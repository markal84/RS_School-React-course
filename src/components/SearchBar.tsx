import React, { Component } from 'react';
import ISearchBarState from '../types/Search';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface ISearchBarProps {
  test?: string;
}

export default class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  state: ISearchBarState = JSON.parse(localStorage.getItem('searchData') || '{}') || {
    query: '',
  };

  handleChange = (e: InputEvent) => {
    this.setState({
      query: e.target.value,
    });
  };

  componentWillUnmount(): void {
    localStorage.setItem('searchData', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="Search">
        <div>
          <input
            type="text"
            placeholder="search..."
            defaultValue={this.state.query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
