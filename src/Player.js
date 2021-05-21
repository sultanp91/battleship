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

  return { playerName, board, randomMove };
}
