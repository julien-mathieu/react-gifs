import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "26n6WywJyh39n1pBu"
    }

  }

  search = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&rating=g&api_key=wGbTxD8ZARANdpY8S3gbx8TEggEt7ArJ`
      fetch(url)
      .then(results => { return results.json();
      }).then(data => {
        this.setState({gifs: data.data});
        console.log(data.data)
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <div className="form-search">
            <SearchBar searchFunction={this.search} />
          </div>
          <div>
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId}/>
            </div>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
