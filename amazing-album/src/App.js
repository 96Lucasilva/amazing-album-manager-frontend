import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumList from './albumListing/albumListing';
import Navbar from './navbar/navbar';

class App extends Component {
  state = {
    albums: [
      {title: 'The Best of Bill Medley', artist: 'Bill Medley', year: '1990', albumLength: '10', capa: 'https://cps-static.rovicorp.com/3/JPG_500/MI0002/471/MI0002471400.jpg?partner=allrovi.com', id: '01'},
      {title: 'Frontiers', artist: 'Journey', year: '1983', albumLength: '14', capa: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Jfrontiers.jpg/220px-Jfrontiers.jpg', id: '02'},
      {title: 'Can\'t Hold Back', artist: 'Eddie Money', year: '1986', albumLength: '10', capa: 'https://images-na.ssl-images-amazon.com/images/I/512CqlcQAvL._SY355_.jpg', id: '03'}
    ]
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        {this.state.albums.map((albums, index) => {
          return <AlbumList
              capa={albums.capa}
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
