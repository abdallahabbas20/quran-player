import React, { useState } from "react";

const LibrarySurah = ({
  currentSurah,
  surah,
  setCurrentSurah,
  audioRef,
  isPlaying,
  libraryStatus,
  setLibraryStatus,
}) => {
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const onLoadHandler = () => {
    setLoading(true);
  };
  const onClickHandler = async () => {
    // currentSurah.active = false;
    // surah.active = true;
    if (width < 600) {
      console.log(width);
      setLibraryStatus(false);
    }
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

  surah.name = surah.name.split("(")[0];

  return (
    <div
      className={`library-surah ${
        surah.id === currentSurah.id ? "selected" : ""
      }`}
      onClick={onClickHandler}
    >
      <div className="album-art" style={s}></div>
      <div className="surah-description">
        <h3>Surah {" " + surah.name}</h3>
        {/* <h4>{surah.reciter}</h4> */}
      </div>
    </div>
  );
};

export default LibrarySurah;
