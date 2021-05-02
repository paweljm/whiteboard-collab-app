import React from "react";
import { useState } from "react";
import Board from "../board/Board";

import socket from "../socket";

import "./style.css";

function Container() {
  const [color, setColor] = useState("#fffff");
  function handleChange(event) {
    socket.emit("color", { color: color });
    setColor(event.target.value);
  }
  socket.on("onColorSet", ({ color }) => {
    setColor(color);
  });
  function clearBoard() {
    socket.emit("clear", {});
  }
  return (
    <div className="has-background-link">
      <nav className="navbar has-background-link has-text-left has-text-white">
        <h1 className=" ml-3 is-size-3">Collaborative Whiteboard</h1>
        <p className="ml-4 is-size-5">By Pawel Marcinkiewicz</p>
      </nav>
      <div className="columns">
        <div className="column is-three-quarters">
          <Board color={color} />
        </div>
        <div className="column is-2 m-3 box has-text-centered">
          <h2>Color</h2>
          <input
            type="color"
            onChange={handleChange}
            value={color}
            className="input"
          ></input>
          <br />
          <br />
          <button className="button is-danger is-outlined" onClick={clearBoard}>
            Clear Board
          </button>
          <br />
          <br />
          <p>Draw with your mouse on the board.</p>
          <p>
            Invite your peers and anything you draw will be updated on one
            another's screens in real time
          </p>
          <p>
            <br />
            <br />
            <em>
              Color change and canvas affect all apps globally so that you and
              your peers are always on the same page
            </em>
          </p>
        </div>
      </div>
      <footer className="footer has-background-link ">
        <div className="content has-text-centered has-text-white">
          See the code
          <a
            href="https://github.com/paweljm/whiteboard-collab-app"
            target="__blank"
            className="has-text-primary"
          >
            {" "}
            here
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Container;
