import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const GamePlayer = ({
  currentSurah,
  isPlaying,
  setIsPlaying,
  audioRef,
  surahInfo,
  setSurahInfo,
  surahs,
  setCurrentSurah,
  libraryStatus,
}) => {
  const [seconds, setSeconds] = useState(0);

  const playSurahHandler = () => {
    audioRef.current.currentTime = 20;
    setSurahInfo({ ...surahInfo, currentTime: 20 });
    setSeconds(0);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);

      //   setTimeout(function () {
      //       // if they pause whilst its playing it messes up, maybe grey out button so the whole clip plays
      //     audioRef.current.pause();

      //     setIsPlaying(false);
      //     audioRef.current.currentTime = 0;
      //     setSurahInfo({ ...surahInfo, currentTime: 0 });
      //   }, 10000);
    }
  };

  useEffect(() => {
    if (seconds == 10) {
      console.log("10 seconds in");
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`player ${libraryStatus ? "library-active" : ""}`}>
      <div className="play-control">
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSurahHandler}
        />
      </div>
    </div>
  );
};

export default GamePlayer;
