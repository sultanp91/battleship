import gameboardFactory from './Gameboard';

export default function playerFactory(name, turn, AI) {
  const playerName = name;
  //playerTurn will take in a boolean
  let playerTurn = turn;
  //computer will will take in a boolean to determine if it is an AI player or not
  let computer = AI;

  let board = gameboardFactory();

  const randomMove = (opponentBoard) => {
    // function to find board positions which haven't been hit. Function will
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
