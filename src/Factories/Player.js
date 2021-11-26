import gameboardFactory from "./Gameboard";

export default function playerFactory(name) {
  const playerName = name;

  const board = gameboardFactory();

  const randomMove = () => {
    function randomIndex() {
      const randomIdx = Math.floor(Math.random() * 100);
      if (board.boardArray[randomIdx].hit === false) {
        return randomIdx;
      }
      if (board.boardArray[randomIdx].hit === true) {
        return randomIndex();
      }
    }
    const idx = randomIndex();
    board.receiveAttack(idx);
  };

  function randIdxOrientation(shipLength) {
    const randomIdx = Math.floor(Math.random() * 100);
    const orientations = [true, false];
    const randomOrientation = Math.floor(Math.random() * 2);
    if (
      !board.placeShip(shipLength, randomIdx, orientations[randomOrientation])
    ) {
      return randIdxOrientation(shipLength);
    }
  }

  const shipLengths = [5, 4, 3, 3, 2];

  const randomPlacement = () => {
    shipLengths.forEach((shipLength) => {
      randIdxOrientation(shipLength);
    });
  };

  return { playerName, board, randomMove, shipLengths, randomPlacement };
}
