import shipFactory from './ship';

test('isSunk function will return true if shipLife is zero', () => {
  const newShip = shipFactory(2);
  newShip.hit();
  newShip.hit();

  expect(newShip.isSunk()).toBe(true);
});

test('isSunk function will return false if shipLife is more than zero', () => {
  const newShip = shipFactory(3);
  newShip.hit();

  expect(newShip.isSunk()).toBe(false);
});
