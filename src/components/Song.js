import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <img src={currentSong.cover} alt="Cover" />
      <h2 className="song-name">{currentSong.name}</h2>
      <h3 className="artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;