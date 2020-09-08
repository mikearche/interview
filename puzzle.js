const puzzle = (peopleInRoom, n) => {
    const peopleInRoomArray = new Array(peopleInRoom);

    // Fill the peopleInRoom with inc numbers
    for(var i = 0; i < peopleInRoomArray.length; i++){
        peopleInRoomArray[i] = i + 1;
    }

    // recursively cut their heads off :o
    const cutOffHead = (peopleToCut, indexToCut, n) => {
        const cutItems = peopleToCut.splice(indexToCut, 1);
        cutOffHead(cutItems, indexToCut + n);
    }

    cutOffHead(peopleInRoomArray, 0, n)
}


/**
 * [1,2,3,4,5,6,7]
 * [2,3,4,5,6,7]
 * [2,4,5,6,7]
 * [2,4,6,7]
 * [2,4,6]
 * [2,6]
 * [6]
 */