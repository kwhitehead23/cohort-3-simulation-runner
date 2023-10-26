import React, { useState } from "react";
import "./Grid.css";

function Grid() {
  const [maze, setMaze] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0],
    [5, 3, 1, 1, 1, 1, 1, 0, 0],
    [1, 3, 1, 0, 0, 0, 1, 0, 0],
    [1, 3, 3, 2, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 4, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function getColor(cellValue) {
    switch (cellValue) {
      case 0:
        return "white"; // Change this to the desired color
      case 1:
        return "grey"; // Change this to the desired color
      case 2:
        return "black"; // Change this to the desired color
      case 3:
        return "green"; // Change this to the desired color
      case 4:
        return "red"; // Change this to the desired color
      case 5:
        return "orange";
      default:
        return "white"; // Default color
    }
  }

  const gridJSX = maze.map((row, rowIndex) => (
    <div key={rowIndex} className="maze-row">
      {row.map((cell, columnIndex) => (
        <div
          key={columnIndex}
          className="cell"
          style={{ backgroundColor: getColor(cell) }}
        />
      ))}
    </div>
  ));

  return <div className="maze">{gridJSX}</div>;
}

export default Grid;
