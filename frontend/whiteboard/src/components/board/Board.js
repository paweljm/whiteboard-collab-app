import React from "react";
import { useEffect, useState } from "react";

import "./style.css";

const Board = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);

  useEffect(() => {
    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;
    canvas.onmousedown = (e) => {
      setMouseDown(true);
      ctx.beginPath();
    };
    canvas.onmouseup = (e) => {
      setMouseDown(false);
      ctx.closePath();
    };
    canvas.onmousemove = (e) => {
      let rect = canvas.getBoundingClientRect();
      setMousePos([
        ((e.clientX - rect.left) / rect.width) * canvas.width,
        ((e.clientY - rect.top) / rect.height) * canvas.height,
      ]);

      if (mouseDown) {
        ctx.lineTo(mousePos[0], mousePos[1]);

        ctx.stroke();
      } else {
      }
    };
  });

  return <canvas id="board" className="board"></canvas>;
};

export default Board;
