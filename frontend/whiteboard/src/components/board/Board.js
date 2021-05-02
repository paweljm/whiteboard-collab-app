import React from "react";
import { useEffect, useState } from "react";
import socket from "../socket";

import "./style.css";

const Board = ({ color }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);

  useEffect(() => {
    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;
    socket.on("onClear", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    canvas.onmousedown = (e) => {
      setMouseDown(true);
      ctx.beginPath();
      socket.emit("down", { x: mousePos[0], y: mousePos[1] });
    };
    canvas.onmouseup = (e) => {
      setMouseDown(false);
      socket.emit("up", { x: mousePos[0], y: mousePos[1] });
    };
    socket.on("onDown", ({ x, y }) => {
      ctx.beginPath();
      console.log("onDown");
    });
    socket.on("onDraw", ({ x, y }) => {
      ctx.lineTo(x, y);
      ctx.stroke();
    });
    canvas.onmousemove = (e) => {
      let rect = canvas.getBoundingClientRect();
      setMousePos([
        ((e.clientX - rect.left) / rect.width) * canvas.width,
        ((e.clientY - rect.top) / rect.height) * canvas.height,
      ]);

      if (mouseDown) {
        socket.emit("draw", { x: mousePos[0], y: mousePos[1] });
        ctx.lineTo(mousePos[0], mousePos[1]);
        ctx.stroke();
      } else {
      }
    };
  });

  return <canvas id="board" className="box"></canvas>;
};

export default Board;
