import shipFactory from './ship';

export default function Gameboard() {
  const boardArray = [...Array(100).fill('empty')];

  const placeShip = (ship, idx) => {
    //checking to see if full length of ship will fit that row
    //need to add code to check if position is already occupied by another boat
    const shipPlacement = idx % 10;
    if (ship.shipLength + shipPlacement < 10) {
      this.boardArray.splice(
        idx,
        ship.shipLength,
        ...Array(ship.shipLength).fill('ship')
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

  const ship1 = shipFactory(4);
  const ship2 = shipFactory(3);
  const ship3 = shipFactory(2);
  const ship4 = shipFactory(2);

  const shipsSunk = function () {
    const result1 = ship1.isSunk();
    const result2 = ship2.isSunk();
    const result3 = ship3.isSunk();
    const result4 = ship4.isSunk();

    let result;
    if (ship1 && ship2 && ship3 && ship4) {
      result = true;
    }
    return result;
  };
}
