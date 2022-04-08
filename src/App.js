import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Surah from "./components/Surah";
import PalettePlayer, { getSurahs } from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Game from "./components/Game";

function App() {
  const [surahs, setSurahs] = useState(getSurahs());
  const [currentSurah, setCurrentSurah] = useState(surahs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [gameMode, setGameMode] = useState(false);
  const audioRef = useRef(null);

  const [surahInfo, setSurahInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSurahInfo({
      ...surahInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  let showGame = gameMode ? "none" : "";

  const surahEndHandler = async () => {
    let currentSurahIndex = surahs.findIndex(
      (surah) => surah.id === currentSurah.id
    );
    console.log({ currentSurahIndex });

    await setCurrentSurah(
      surahs[
        currentSurahIndex + 1 === surahs.length ? 0 : currentSurahIndex + 1
      ]
    );
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        gameMode={gameMode}
        setGameMode={setGameMode}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      {gameMode && (
        <Game
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
          gameMode={gameMode}
          setGameMode={setGameMode}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSurah={currentSurah}
          surahInfo={surahInfo}
          setSurahInfo={setSurahInfo}
          surahs={surahs}
          setCurrentSurah={setCurrentSurah}
        />
      )}
      <div
        style={{
          display: showGame,
        }}
      >
        <Surah currentSurah={currentSurah} libraryStatus={libraryStatus} />
        <Player
          currentSurah={currentSurah}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          surahInfo={surahInfo}
          setSurahInfo={setSurahInfo}
          surahs={surahs}
          setCurrentSurah={setCurrentSurah}
          // libraryStatus={libraryStatus}
        />
        <Library
          surahs={surahs}
          currentSurah={currentSurah}
          setCurrentSurah={setCurrentSurah}
          audioRef={audioRef}
          isPlaying={isPlaying}
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setSurahs={setSurahs}
        />
      </div>

      <audio
        ref={audioRef}
        src={currentSurah.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={surahEndHandler}
      ></audio>
    </div>
  );
}

export default App;
