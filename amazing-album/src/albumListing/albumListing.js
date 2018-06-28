import React from 'react';

const AlbumList = (props) => {
  return (
    <div>
      <img src="http://via.placeholder.com/50x50" />
      <p>{props.title}</p>
      <p>Artist: {props.artist}</p>
      <p>Year: {props.year}</p>
      <p>Number of Tracks: {props.albumLength}</p>
    </div>
  )
};

export default AlbumList;
