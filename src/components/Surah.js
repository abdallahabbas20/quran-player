import React, { useState } from "react";

const Surah = ({ currentSurah }) => {
  const s = {
    width: "275px",
    height: "275px",
    borderRadius: "50%",
    // backgroundColor: `rgb(${getColor()}, ${getColor()}, ${getColor()})`,
    backgroundImage: `linear-gradient(to right, rgba(${currentSurah.color[0]}, ${currentSurah.color[1]}, ${currentSurah.color[2]}), rgb(${currentSurah.color[3]}, ${currentSurah.color[4]}, ${currentSurah.color[5]}))`,
  };
  const [loading, setLoading] = useState(false);
  const onLoadHandler = () => {
    setLoading(true);
  };

  return (
    <div className="surah-container">
      {/* {!loading && <div className="loading-cover"></div>}
      <img
        src={currentSurah.cover}
        alt=""
        onLoad={onLoadHandler}
        style={{ display: "none" }}
      />
      {loading && <img src={currentSurah.cover} alt="" />} */}
      <div style={s} className="cover-art"></div>

      <h2>{currentSurah.name}</h2>
      <h3>{currentSurah.reciter}</h3>
    </div>
  );
};

export default Surah;
