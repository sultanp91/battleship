import playerFactory from './Player';

test('randomMove will hit a random board position - randomMove not called', () => {
  let player1 = playerFactory('p1');
  let player2 = playerFactory('p2');

  expect(player2.board.boardArray.some((item) => item.hit === true)).toBe(
    false
  );
});

test('randomMove will hit a random board position', () => {
  let player1 = playerFactory('p1');
  let player2 = playerFactory('p2');

  player1.randomMove();

  expect(player1.board.boardArray.some((item) => item.hit === true)).toBe(true);
});
