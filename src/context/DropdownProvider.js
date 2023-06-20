import React, { useState, useContext } from "react";
import { checkXCoords, checkYCoords } from "../utils/characters";

const DropDownContext = React.createContext();

const useDropdown = () => {
    return useContext(DropDownContext);
}

const DropdownProvider = ( {children} ) => {

    const [isDropDown, setIsDropDown] = useState(false);
    const [chosenCharacter, setChosenCharacter] = useState(null);
    const [characters, setCharacters] = useState([
        {
          name: 'Spider-Man',
          found: false,
          xRange: [14,21],
          yRange: [50,53]
        },
        {
          name: 'Nathan Drake',
          found: false,
          xRange: [60,64],
          yRange: [68,71]
        },
        {
          name: 'Kratos',
          found: false,
          xRange: [59,64],
          yRange: [54,57]
        }
      ]);

    const toggleDropDown = () => {
        setIsDropDown(!isDropDown);
    }

    const checkCharacters = (selectedCharacter, coords) => {
        setCharacters((prevCharacters) =>
          prevCharacters.map((character) => 
            selectedCharacter.name === character.name && checkXCoords(characters, selectedCharacter, coords[0]) && checkYCoords(characters, selectedCharacter, coords[1]) 
              ? { ...character, found: true }
              : character
          )
        );
      }

      const allCharactersFound = () => {
        for (let character of characters) {
            if (character.found === false) {
                return false;
            }
        }
    
        return true;
    }

    return (
        <DropDownContext.Provider value={{isDropDown, toggleDropDown, chosenCharacter, setChosenCharacter, characters, checkCharacters, allCharactersFound}}>
            {children}
        </DropDownContext.Provider>
    )
    
}

export {useDropdown};
export default DropdownProvider;