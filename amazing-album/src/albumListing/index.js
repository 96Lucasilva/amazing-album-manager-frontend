import React from 'react';
import './style.css';

const AlbumList = (props) => {
  return (
    <div className="albumListing">
      <div className="albumListing-image">
      <img src={props.capa} />
      </div>
      <div className="albumListing-text">
        <div className="albumTitle">
          <p>{props.title}</p>
        </div>
        <div className="albumListing-text">
          <p>Artist: {props.artist}</p>
          <p>Year: {props.year}</p>
          <p>Number of Tracks: {props.albumLength}</p>
        </div>
      </div>
    </div>
  )
};

export default AlbumList;
