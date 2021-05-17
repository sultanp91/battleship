import playerFactory from './Player';

export default function gameLoop() {
  let player1 = playerFactory('player1', true, false);
  let AIPlayer = playerFactory('computer', false, true);
  let gameOver = false;

  const checkGameOver = () => {
    if (
      player1.board.shipsSunk() === true ||
      AIPlayer.board.shipsSunk() === true
    ) {
      gameOver = true;
    }
  };
}
