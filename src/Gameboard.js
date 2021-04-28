import shipFactory from './ship';

export default function gameboardFactory() {
  const boardArray = [];
  const shipArray = [];
  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardArray.push({
        ship: false,
        hit: false,
      });
    }
  };

  if (boardArray.length < 1) {
    initBoard();
  }

  const placeShip = function (length, idx) {
    //checking to see if full length of ship will fit that row
    //need to add code to check if position is already occupied by another boat
    let ship = shipFactory(length);
    shipArray.push(ship);
    const shipPlacement = idx % 10;
    if (length + shipPlacement < 10) {
      for (let i = idx; i < length + idx; i++) {
        boardArray.splice(i, 1, {
          currentShip: ship,
          ship: true,
          hit: false,
        });
      }
    }
  };

  const receiveAttack = (idx) => {
    if (boardArray[idx].ship === true) {
      boardArray[idx].currentShip.hit();
      boardArray[idx].hit = true;
    } else if (boardArray[idx].ship === false) {
      boardArray[idx].hit = true;
    }
  };

  const shipsSunk = function () {
    return shipArray.every((item) => item.isSunk() === true);
  };

  return {
    boardArray,
    shipArray,
    initBoard,
    placeShip,
    // receiveAttack,
    shipsSunk,
  };
}
