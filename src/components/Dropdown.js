import React, { useState, useEffect } from "react";
import { useDropdown } from "../context/DropdownProvider";
import '../styles/Dropdown.css'

const Dropdown = (props) => {

    const {dropDownCoords, handleDropDownClick} = props;

    const {isDropDown, characters} = useDropdown();

    const [characterList, setCharacterList] = useState([]);

    const handleOptionClick = (character) => {
        console.log(character);
        //setChosenCharacter(character);
        handleDropDownClick(character);
    }

    useEffect(() => {
        if (isDropDown) {
            setCharacterList(characters);
        }
    }, [characters, isDropDown]);


        return (
            <>
                {isDropDown ? (
                <>
                <div style={{position: 'absolute', left: dropDownCoords[0], top: dropDownCoords[1], width: 200, height: 250}} className="dropdown">
                <h2>Choose character</h2>
                    {characterList.map((character) => {
                        if (!character.found) {
                            return <li key={character.name} className="character" onClick={() => {handleOptionClick(character)}}>{character.name}</li>
                        }

                        return null;
                    })}
                </div>
                </>
                ) : (null)}
            </>
        )
    }

export default Dropdown;