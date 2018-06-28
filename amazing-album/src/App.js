import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumList from './albumListing/albumListing';

class App extends Component {
  state = {
    albums: [
      {title: 'The Best of Bill Medley', artist: 'Bill Medley', year: '1990', albumLength: '10', id: '01'},
      {title: 'Frontiers', artist: 'Journey', year: '1983', albumLength: '14', id: '02'}
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.albums.map((albums, index) => {
          return <AlbumList
              title={albums.title}
              artist={albums.artist}
              year={albums.year}
              albumLength={albums.albumLength}
              key={albums.id} />

        })}
      </div>
    );
  }
}

export default App;
