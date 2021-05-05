import gameboardFactory from './Gameboard';

export default function playerFactory(name, turn) {
  const name = name;

  let board = gameboardFactory();

  let turn = turn;

  const randomMove = (opponentBoard) => {
    let randomIdx = Math.floor(Math.random() * 100);

    if (opponentBoard[randomIdx].hit === false) {
      return randomIdx;
    } else if (opponentBoard[randomIdx].hit === true) {
      randomIdx = randomMove();
    }
    return randomIdx;
  };
}
