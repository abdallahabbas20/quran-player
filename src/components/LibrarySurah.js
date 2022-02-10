import React, { useState } from "react";

const LibrarySurah = ({
  currentSurah,
  surah,
  setCurrentSurah,
  audioRef,
  isPlaying,
}) => {
  const [loading, setLoading] = useState(false);
  const onLoadHandler = () => {
    setLoading(true);
  };
  const onClickHandler = async () => {
    // currentSurah.active = false;
    // surah.active = true;
    await setCurrentSurah(surah);
    if (isPlaying) audioRef.current.play();
  };

  const s = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    // backgroundColor: `rgb(${getColor()}, ${getColor()}, ${getColor()})`,
    backgroundImage: `linear-gradient(to right, rgba(${surah.color[0]}, ${surah.color[1]}, ${surah.color[2]}), rgb(${surah.color[3]}, ${surah.color[4]}, ${surah.color[5]}))`,
  };

  return (
    <div
      className={`library-surah ${
        surah.id === currentSurah.id ? "selected" : ""
      }`}
      onClick={onClickHandler}
    >
      <div className="album-art" style={s}></div>
      <div className="surah-description">
        <h3>{surah.name}</h3>
        {/* <h4>{surah.reciter}</h4> */}
      </div>
    </div>
  );
};

export default LibrarySurah;
