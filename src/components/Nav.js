import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  libraryStatus,
  setLibraryStatus,
  gameMode,
  setGameMode,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const onClickHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  const onGameClickHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    setGameMode(!gameMode);
  };
  return (
    <nav>
      <h1>QuranHub</h1>
      <div className="inline">
        <button className="hide" onClick={onGameClickHandler}>
          Start Game
        </button>

        <button className="stay-top" onClick={onClickHandler}>
          Library
        </button>
      </div>
    </nav>
  );
};

export default Nav;
