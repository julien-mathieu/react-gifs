import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'

class App extends React.Component {
  render() {
    return(
      <div>
        <div className="left-scene">
          <div className="form-search">
            <SearchBar />
          </div>
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
