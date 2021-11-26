import React from "react";

function ShipPlacer({ setHorizontal, horizontal, index, player1 }) {
  return (
    <div className="ship-placer">
      <table className="table">
        <tr>
          <th>Orientation</th>{" "}
          <td>
            <button type="button" onClick={() => setHorizontal(!horizontal)}>
              {horizontal ? "Horizontal" : "Vertical"}{" "}
            </button>
          </td>
        </tr>
        <tr>
          <th>Ship Length: </th> <td> {player1.shipLengths[index]}</td>
        </tr>
      </table>
    </div>
  );
}

export default ShipPlacer;
