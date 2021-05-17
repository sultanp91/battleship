import playerFactory from './Player';

test('random Move returns an integer', () => {
  let player1 = playerFactory('p1', true);
  let player2 = playerFactory('p2', false);

  player1.randomMove(player2.board);

  expect(player2.board.boardArray.some((item) => item.hit === true)).toBe(true);
});
