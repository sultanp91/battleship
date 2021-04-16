export default function shipFactory(length) {
  const shipArray = [...Array(length)].fill('not hit');

  const hit = function (index) {
    this.shipArray[index] = 'hit';
  };
  const isSunk = function () {
    return this.shipArray.every((item) => item === 'hit');
  };

  return { shipArray, hit, isSunk };
}
