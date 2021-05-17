import gameboardFactory from './Gameboard';

export default function playerFactory(name, turn) {
  const playerName = name;

  let board = gameboardFactory();

  let playerTurn = turn;

  const randomMove = (opponentBoard) => {
    function randomIndex() {
      let randomIdx = Math.floor(Math.random() * 100);

      if (opponentBoard.boardArray[randomIdx].hit === false) {
        return randomIdx;
      } else if (opponentBoard.boardArray[randomIdx].hit === true) {
        randomIdx = randomMove();
      }
      return randomIdx;
    }

    let idx = randomIndex();
    opponentBoard.receiveAttack(idx);
  };

  return { playerName, playerTurn, board, randomMove };
}
