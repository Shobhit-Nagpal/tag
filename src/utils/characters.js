const checkXCoords = (characters, selectedCharacter, xCoord) => {
    for (let character of characters) {
        if (selectedCharacter.name === character.name) {
            if (xCoord >= character.xRange[0] && xCoord <= character.xRange[1]) {
                return true;
            }
        }
    }

    return false;
}


const checkYCoords = (characters, selectedCharacter, yCoord) => {
    for (let character of characters) {
        if (selectedCharacter.name === character.name) {
            if (yCoord >= character.yRange[0] && yCoord <= character.yRange[1]) {
                return true;
            }
        }
    }

    return false;
}

export {checkXCoords, checkYCoords};