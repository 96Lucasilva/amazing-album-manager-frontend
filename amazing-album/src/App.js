import React, { Component } from 'react';
import './App.css';
import AlbumList from './AlbumListing';
import Navbar from './Navbar';

class App extends Component {
  state = {
    albums: [
      {title: 'The Best of Bill Medley', artist: 'Bill Medley', year: '1990', albumLength: '10', capa: 'https://cps-static.rovicorp.com/3/JPG_500/MI0002/471/MI0002471400.jpg?partner=allrovi.com', id: '01'},
      {title: 'Frontiers', artist: 'Journey', year: '1983', albumLength: '14', capa: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Jfrontiers.jpg/220px-Jfrontiers.jpg', id: '02'},
      {title: 'Can\'t Hold Back', artist: 'Eddie Money', year: '1986', albumLength: '10', capa: 'https://images-na.ssl-images-amazon.com/images/I/512CqlcQAvL._SY355_.jpg', id: '03'},
      {title: 'Freeze Frame', artist: 'The J. Geils Band', year: '1981', albumLength: '9', capa: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/J._Geils_Band_-_Freeze_Frame.jpg/220px-J._Geils_Band_-_Freeze_Frame.jpg', id: '04'},
      {title: 'Trash', artist: 'Alice Cooper', year: '1989', albumLength: '10', capa: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Actrash.jpg/220px-Actrash.jpg', id: '05'},
      {title: 'Never Too Much', artist: 'Luther Vandross', year: '1981', albumLength: '7', capa: 'https://s2.vagalume.com/luther-vandross/discografia/never-too-much-W320.jpg', id: '06'},
      {title: 'Discovery', artist: 'Electric Light Orchestra', year: '1979', albumLength: '9', capa: 'https://upload.wikimedia.org/wikipedia/en/c/c9/ELODiscoveryalbumcover.jpg', id: '07'},
      {title: 'Street Songs', artist: 'Rick James', year: '1981', albumLength: '10', capa: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Rick_James_-_Street_Songs.jpg/220px-Rick_James_-_Street_Songs.jpg', id: '08'},
      {title: 'Staying Power', artist: 'Barry White', year: '1999', albumLength: '11', capa: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Barrypower.jpg/220px-Barrypower.jpg', id: '09'}
    ]
  };

  render() {
    return (
    <div>
      <Navbar />

      <div className="App">
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
    </div>
    );
  }
}

export default App;
