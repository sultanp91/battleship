import gameboardFactory from './Gameboard';

export default function playerFactory(name) {
  const playerName = name;

  let board = gameboardFactory();

  const randomMove = () => {
    function randomIndex() {
      let randomIdx = Math.floor(Math.random() * 100);
      if (board.boardArray[randomIdx].hit === false) {
        return randomIdx;
      } else if (board.boardArray[randomIdx].hit === true) {
        return randomIndex();
      }
    }

    let idx = randomIndex();
    board.receiveAttack(idx);
  };

  function randIdxOrientation(shipLength) {
    let randomIdx = Math.floor(Math.random() * 100);
    let orientations = [true, false];
    let randomOrientation = Math.floor(Math.random() * 2);
    if (
      !board.placeShip(shipLength, randomIdx, orientations[randomOrientation])
    ) {
      return randIdxOrientation(shipLength);
    }
  }

  const randomPlacement = () => {
    let shipLengths = [5, 4, 3, 3, 2];
    shipLengths.forEach((shipLength) => {
      console.log(shipLength);
      randIdxOrientation(shipLength);
    });
  };

  return { playerName, board, randomMove, randomPlacement };
}
