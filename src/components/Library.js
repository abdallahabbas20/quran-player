import React from "react";
import Dropdown from "./Dropdown";
import LibrarySurah from "./LibrarySurah";

const Library = ({
  currentSurah,
  surahs,
  setCurrentSurah,
  audioRef,
  isPlaying,
  libraryStatus,
  selectedOption,
  setSelectedOption,
  setSurahs,
}) => {
  return (
    <div className={`library ${libraryStatus ? "open-library" : ""}`}>
      <h2>Library</h2>
      <Dropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setSurahs={setSurahs}
      />
      <div className="library-surahs">
        {surahs.map((surah) => (
          <LibrarySurah
            key={surah.id}
            surah={surah}
            currentSurah={currentSurah}
            setCurrentSurah={setCurrentSurah}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
