import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const onClickHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <nav>
      <h1>Quran.io</h1>

      <button onClick={onClickHandler}>Library</button>
    </nav>
  );
};

export default Nav;
