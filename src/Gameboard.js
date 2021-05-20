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

  let prevAttack = {
    hit: null,
    idx: null,
  };

  const placeShip = function (length, idx, horizontal) {
    if (horizontal) {
      //checking to see if full length of ship will fit on board
      const shipPlacement = idx % 10;
      if (length + shipPlacement < 10) {
        //checking to see if all positions on board are free for the ship
        let positionArray = [];
        for (let i = idx; i < length + idx; i++) {
          positionArray.push(boardArray[i]);
        }
        if (positionArray.every((item) => item.ship === false)) {
          let ship = shipFactory(length);
          shipArray.push(ship);
          for (let i = idx; i < length + idx; i++) {
            boardArray.splice(i, 1, {
              currentShip: ship,
              ship: true,
              hit: false,
            });
          }
        }
      }
    }
    if (!horizontal) {
      if (idx + (length - 1) * 10 < 100) {
        let positionArray = [];
        for (let i = idx; i <= idx + (length - 1) * 10; i += 10) {
          positionArray.push(boardArray[i]);
        }
        if (positionArray.every((item) => item.ship === false)) {
          let ship = shipFactory(length);
          shipArray.push(ship);
          for (let i = idx; i <= idx + (length - 1) * 10; i += 10) {
            boardArray.splice(i, 1, {
              currentShip: ship,
              ship: true,
              hit: false,
            });
          }
        }
      }
    }
  };

  const receiveAttack = (idx) => {
    if (boardArray[idx].ship === true && boardArray[idx].hit === false) {
      boardArray[idx].currentShip.hit();
      boardArray[idx].hit = true;
      prevAttack.hit = true;
      prevAttack.idx = idx;
    } else if (
      boardArray[idx].ship === false &&
      boardArray[idx].hit === false
    ) {
      boardArray[idx].hit = true;
      prevAttack.hit = false;
      prevAttack.idx = null;
    }
  };

  const shipsSunk = function () {
    if (shipArray.length > 0) {
      return shipArray.every((item) => item.isSunk() === true);
    }
  };

  return {
    boardArray,
    shipArray,
    placeShip,
    receiveAttack,
    shipsSunk,
    prevAttack,
  };
}
