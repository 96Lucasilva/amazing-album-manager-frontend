import React from 'react';
import './albumListing.css';

const AlbumList = (props) => {
  return (
    <div className="albumListing">
      <div className="albumListing-image">
      <img src={props.capa} />
    </div>
    <div className="albumListing-text">
      <p className="albumTitle">{props.title}</p>
      <p>Artist: {props.artist}</p>
      <p>Year: {props.year}</p>
      <p>Number of Tracks: {props.albumLength}</p>
    </div>
    </div>
  )
};

export default AlbumList;
