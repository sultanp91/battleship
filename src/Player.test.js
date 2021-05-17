import playerFactory from './Player';

test('randomMove will hit a random board position - randomMove not called', () => {
  let player1 = playerFactory('p1', true);
  let player2 = playerFactory('p2', false);

  expect(player2.board.boardArray.some((item) => item.hit === true)).toBe(
    false
  );
});

test('randomMove will hit a random board position', () => {
  let player1 = playerFactory('p1', true, false);
  let player2 = playerFactory('p2', false, true);

  player1.randomMove(player2.board);

  expect(player2.board.boardArray.some((item) => item.hit === true)).toBe(true);
});
