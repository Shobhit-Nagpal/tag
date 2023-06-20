import React, {useEffect, useState} from "react";
import { useDropdown } from "../context/DropdownProvider";
import ps4Image from "../images/ps4.jpg";
import '../styles/Game.css';
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import Timer from "./Timer";
import FindCharacters from "./FindCharacters";

const Game = () => {

    const [coords, setCoords] = useState([]);
    const [dropDownCoords, setDropDownCoords] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [totalTime, setTotalTime] = useState(null);

    const {toggleDropDown, checkCharacters, setChosenCharacter, allCharactersFound, characters} = useDropdown();

    const handleClick = (e) => {
        const clickCoords = getClickCoordinates(e);
        console.log(clickCoords);
        setCoords(clickCoords);
        toggleDropDown();
        return;
    }

    const getClickCoordinates = (e) => {

    const xCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const yCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
    setCoords([xCoord, yCoord]);

    const dropDownXCoord = e.nativeEvent.offsetX + 30;
    const dropDownYCoord = e.nativeEvent.offsetY + 20;
    setDropDownCoords([dropDownXCoord, dropDownYCoord]);

    return [xCoord, yCoord];

    }
   
    const handleDropDownClick = (character) => {

      console.log(character);

        checkCharacters(character, coords);
        setChosenCharacter(null);
        return;
    }

    useEffect(() => {
      if (allCharactersFound()) {
          setIsGameOver(true);
      }

      if (isGameOver) {
        setShowModal(true)
      }
  }, [characters, isGameOver]);


  useEffect(() => {
    console.log(totalTime)
  }, [totalTime]);

    return (
      <div>
        {showModal ? (<Modal setShowModal={setShowModal} totalTime={totalTime}/>) : (null)}
        <Dropdown dropDownCoords={dropDownCoords} handleDropDownClick={handleDropDownClick} />
        <Timer setTotalTime={setTotalTime} isGameOver={isGameOver}/>
        <FindCharacters />
        <img className="bg" src={ps4Image} alt="PS4 Console Explosion" onClick={(e) => handleClick(e)}></img>
      </div>
    );
  }
  
  export default Game;