import React from "react";
import Board from "../board/Board";

import "./style.css";

function Container() {
  return (
    <div className="container">
      <div className="color-picker-container">
        <input type="color" />
      </div>
      <div className="board-container">
        <Board></Board>
      </div>
    </div>
  );
}

export default Container;
