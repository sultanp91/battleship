import shipFactory from './ship';

test('Ship object can take hits', () => {
  const newShip = shipFactory(3);
  newShip.hit(0);

  expect(newShip.shipArray[0]).toBe('hit');
});

test('isSunk function will return true if all array positions are hit', () => {
  const newShip = shipFactory(2);
  newShip.hit(0);
  newShip.hit(1);

  expect(newShip.isSunk()).toBe(true);
});
