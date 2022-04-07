import React, { useEffect, useState } from "react";

const Option = ({
  option,
  currentSurah,
  questionClicked,
  setQuestionClicked,
}) => {
  const [correctSurah, setCorrectSurah] = useState("");

  useEffect(() => {
    if (option === currentSurah.name) {
      setCorrectSurah(true);
    }
  });

  const onClickHandler = () => {
    setQuestionClicked("true");
  };

  return (
    <div
      className={`option ${
        questionClicked && correctSurah ? "option-correct" : ""
      } ${questionClicked && !correctSurah ? "option-incorrect" : ""}`}
      onClick={onClickHandler}
    >
      {option}
    </div>
  );
};

export default Option;
