import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return(
      <input
        type="text"
        id="search-input"
        placeholder="Search..."
        className="form-control form-search"
      />
    );
  }
}

export default SearchBar;
