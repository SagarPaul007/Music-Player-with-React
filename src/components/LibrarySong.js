import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
  id,
}) => {
  const songChangeHandler = async () => {
    await setCurrentSong(song);
    // active song
    const newSongs = songs.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });

    await setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songChangeHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="Cover" />
      <div className="details">
        <h3 className="song-name">{song.name}</h3>
        <h4 className="artist">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
