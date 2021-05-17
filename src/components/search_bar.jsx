import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value })
    this.props.searchFunction(event.target.value)
  }

  render() {
    return(
      <input
        value={this.state.query}
        type="text"
        id="search-input"
        placeholder="Search..."
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
