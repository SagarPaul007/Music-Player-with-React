import React from "react";
// importing fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const getTime = (time) => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {
  // Handler function

  const activeLibraryHandler = (nextPrev) => {
    // active song
    const newSongs = songs.map((s) => {
      if (s.id === nextPrev.id) {
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

    setSongs(newSongs);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const rangeChangeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skip = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "backward") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }

      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className="player">
      <div className="time-control">
        <p className="start-time">{getTime(songInfo.currentTime)}</p>
        <input
          onChange={rangeChangeHandler}
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          className="range"
        />
        <p className="end-time">
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skip("backward")}
          size="2x"
          icon={faAngleLeft}
          className="play-icon"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          className="back-icon"
        />
        <FontAwesomeIcon
          onClick={() => skip("forward")}
          size="2x"
          icon={faAngleRight}
          className="forward-icon"
        />
      </div>
    </div>
  );
};

export default Player;
