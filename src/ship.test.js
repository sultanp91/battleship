import shipFactory from './ship';

test('Ship object can take hits', () => {
  const newShip = shipFactory(3);
  newShip.hit();

  expect(newShip.shipLife).toBe(2);
});

test('isSunk function will return true if all array positions are hit', () => {
  const newShip = shipFactory(2);
  newShip.hit();
  newShip.hit();

  expect(newShip.isSunk()).toBe(true);
});
