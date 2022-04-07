import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
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
  const playSurahHandler = () => {
    console.log(audioRef);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const addPadding = (time) => {
    if (time.length !== 5) {
      let paddedTime = "0" + time;
      return paddedTime;
    } else {
      return time;
    }
  };

  const getTime = (time) => {
    return addPadding(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSurahInfo({ ...surahInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentSurahIndex = surahs.findIndex(
      (surah) => surah.id === currentSurah.id
    );
    console.log({ currentSurahIndex });
    if (direction === "skip-forward") {
      await setCurrentSurah(
        surahs[
          currentSurahIndex + 1 === surahs.length ? 0 : currentSurahIndex + 1
        ]
      );
      if (isPlaying) audioRef.current.play();
    }
    if (direction === "skip-back") {
      await setCurrentSurah(
        surahs[
          currentSurahIndex - 1 < 0 ? surahs.length - 1 : currentSurahIndex - 1
        ]
      );
      if (isPlaying) audioRef.current.play();
    }
  };

  let animateTo = surahInfo.animationPercentage;

  if (!animateTo) {
    animateTo = 0;
  }

  const trackAnim = {
    transform: `translateX(${animateTo}%)`,
    background: "#FFF",
    opacity: 0.8,
  };

  const asyncExample = async () => {
    const duration = await surahInfo.duration;
    return duration;
  };

  return (
    <div className={`player ${libraryStatus ? "library-active" : ""}`}>
      <div className="time-control">
        <p>{getTime(surahInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, rgba(${currentSurah.color[0]}, ${currentSurah.color[1]}, ${currentSurah.color[2]}), rgb(${currentSurah.color[3]}, ${currentSurah.color[4]}, ${currentSurah.color[5]}))`,
          }}
          className="track"
        >
          <input
            min={0}
            type="range"
            max={surahInfo.duration || 0}
            value={surahInfo.currentTime}
            onChange={dragHandler}
            onInput={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>

        <p>{surahInfo.duration ? getTime(surahInfo.duration) : "Loading"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        />

        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSurahHandler}
        />

        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
