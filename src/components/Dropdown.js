import React, { useState } from "react";
import styled, { css } from "styled-components";
import { generateAudioList } from "../App";
import { getSurahs, reciters } from "../data";
import { keyframes } from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropdownContainer = styled("div")`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: all 1s ease;
`;

const DropdownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  border: 2px solid rgb(65, 65, 65);

  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  /* color: #0e0e46; */
  background: #ffffff;
  /* border-radius: 10px; */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  &:hover {
    color: white;
    background: rgb(65, 65, 65);
  }
`;

const DropdownListContainer = styled("div")`
  transition: ${(props) => (props.active ? "opacity 2s linear" : "none")};
  overflow-y: scroll;
  max-height: 50vh;
`;

const DropdownList = styled("ul")`
  padding: 0;
  cursor: pointer;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  border: 2px solid #e5e5e567;

  /* border-radius: 10px; */
  box-sizing: border-box;
  color: gray;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #000;
  }
`;

const options = Object.keys(reciters);

export default function Dropdown({
  setSurahs,
  selectedOption,
  setSelectedOption,
}) {
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    let option = reciters[value];
    setSelectedOption(option);
    setIsOpen(false);
    setSurahs(getSurahs(value));
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggling}>
        {selectedOption || "Sheikh Abdullah Awad Al-Juhany"}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer active={isOpen}>
          <DropdownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {reciters[option]}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
}
