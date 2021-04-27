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

  //   const receiveAttack = (idx) => {
  //     if (this.boardArray[idx] === 'empty') {
  //       this.boardArray = 'miss';
  //     } else if (this.boardArray[idx] === 'ship') {
  //       this.boardArray[idx] = 'hit';
  //       ship.hit();
  //     }
  //   };

  //   const shipsSunk = function () {
  //     const result1 = ship1.isSunk();
  //     const result2 = ship2.isSunk();
  //     const result3 = ship3.isSunk();
  //     const result4 = ship4.isSunk();

  //     let result = false;
  //     if (ship1 && ship2 && ship3 && ship4) {
  //       result = true;
  //     }
  //     return result;
  //   };

  return {
    boardArray,
    shipArray,
    initBoard,
    placeShip,
    // receiveAttack,
    // shipsSunk,
  };
}
