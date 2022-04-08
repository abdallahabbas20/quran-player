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
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "open-library" : ""}`}>
      <div className="transparent">
        <h2>Library</h2>
      </div>

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
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
