export default function Gameboard() {
  const boardArray = [...Array(100).fill('empty')];

  const placeShip = (ship, idx) => {
    //checking to see if full length of ship will fit that row
    //need to add code to check if position is already occupied by another boat
    const shipPlacement = idx % 10;
    if (ship.length + shipPlacement < 10) {
      this.boardArray.splice(idx, ship.length, ...ship.shipArray);
    }
  };
}
