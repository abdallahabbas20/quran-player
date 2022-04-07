import React, { useEffect, useState } from "react";
import Option from "./Option";
import GamePlayer from "./GamePlayer";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Game = ({
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
  const [answerOptions, setAnswerOptions] = useState([
    "Loading",
    "Loading",
    "Loading",
    "Loading",
  ]);

  const [questionClicked, setQuestionClicked] = useState("");

  useEffect(() => {
    let tempOptions = [];
    let randomSurahIndex = Math.floor(Math.random() * 114);
    setCurrentSurah(surahs[randomSurahIndex]);
    tempOptions.push(surahs[randomSurahIndex].name);
    while (tempOptions.length < 4) {
      let randomInteger = Math.floor(Math.random() * 114);
      if (!tempOptions.includes(surahs[randomInteger].name)) {
        tempOptions.push(surahs[randomInteger].name);
      }
    }

    shuffle(tempOptions);
    setAnswerOptions(tempOptions);
  }, []);

  return (
    <div className="game">
      <h2>What surah is this?</h2>
      <Option
        option={answerOptions[0]}
        currentSurah={currentSurah}
        questionClicked={questionClicked}
        setQuestionClicked={setQuestionClicked}
      />
      <Option
        option={answerOptions[1]}
        currentSurah={currentSurah}
        questionClicked={questionClicked}
        setQuestionClicked={setQuestionClicked}
      />
      <Option
        option={answerOptions[2]}
        currentSurah={currentSurah}
        questionClicked={questionClicked}
        setQuestionClicked={setQuestionClicked}
      />
      <Option
        option={answerOptions[3]}
        currentSurah={currentSurah}
        questionClicked={questionClicked}
        setQuestionClicked={setQuestionClicked}
      />
      <GamePlayer
        currentSurah={currentSurah}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        surahInfo={surahInfo}
        setSurahInfo={setSurahInfo}
        surahs={surahs}
        setCurrentSurah={setCurrentSurah}
      />
    </div>
  );
};

export default Game;
