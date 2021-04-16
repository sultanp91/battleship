import shipFactory from './ship';

test('Ship object can take hits', () => {
  const newShip = shipFactory(3);
  newShip.hit(0);

  expect(newShip.shipArray[0]).toBe('hit');
});
