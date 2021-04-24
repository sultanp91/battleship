import shipFactory from './ship';

export default function gameboardFactory() {
  const boardArray = [];

  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardArray.push({
        positionTaken: false,
        hit: false,
      });
    }
  };

  const placeShip = function (ship, idx) {
    //checking to see if full length of ship will fit that row
    //need to add code to check if position is already occupied by another boat

    let shipObj = JSON.stringify({ currentShip: ship, hit: false });
    const shipPlacement = idx % 10;
    if (ship.shipLength + shipPlacement < 10) {
      this.boardArray.splice(
        idx,
        ship.shipLength,
        ...Array(ship.shipLength).fill(JSON.parse(shipObj))
      );
    }
  };

  const receiveAttack = (idx) => {
    if (this.boardArray[idx] === 'empty') {
      this.boardArray = 'miss';
    } else if (this.boardArray[idx] === 'ship') {
      this.boardArray[idx] = 'hit';
      ship.hit();
    }
  };

  const shipsSunk = function () {
    const result1 = ship1.isSunk();
    const result2 = ship2.isSunk();
    const result3 = ship3.isSunk();
    const result4 = ship4.isSunk();

    let result = false;
    if (ship1 && ship2 && ship3 && ship4) {
      result = true;
    }
    return result;
  };

  return {
    boardArray,
    initBoard,
    placeShip,
    receiveAttack,
    shipsSunk,
  };
}
