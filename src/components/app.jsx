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

    this.search("Search")
  }

  search = (query) => {
    giphy('wGbTxD8ZARANdpY8S3gbx8TEggEt7ArJ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
        // Res contains gif data!
      console.log(res.data);
      this.setState({gifs: res.data})
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
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
