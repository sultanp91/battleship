import gameboardFactory from './Gameboard';

export default function playerFactory(name, turn) {
  const name = name;

  let board = gameboardFactory();

  let turn = turn;

  const randomMove = () => {
    let randomIdx = Math.floor(Math.random() * 100);

    if (board.boardArray[randomIdx].hit === false) {
      return randomIdx;
    } else if (board.boardArray[randomIdx].hit === true) {
      randomIdx = randomMove();
    }
    return randomIdx;
  };
}
