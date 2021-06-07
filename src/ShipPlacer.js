import React from 'react';

function ShipPlacer({ setHorizontal, horizontal, index, player1 }) {
  return (
    <div>
      <h3>
        Orientation: {horizontal ? 'Horizontal' : 'Vertical'}{' '}
        <button type='button' onClick={() => setHorizontal(!horizontal)}>
          Toggle
        </button>
      </h3>
      <div>
        <h3> Ship Length: {player1.shipLengths[index]}</h3>
      </div>
    </div>
  );
}

export default ShipPlacer;
