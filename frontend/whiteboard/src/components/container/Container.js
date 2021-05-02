import React from "react";
import Board from "../board/Board";

import "./style.css";

function Container() {
  return (
    <div className="has-background-link">
      <nav className="navbar has-background-link has-text-left has-text-white">
        <h1 className=" ml-3 is-size-3">Collaborative Whiteboard</h1>
        <p className="ml-4 is-size-5">By Pawel Marcinkiewicz</p>
      </nav>
      <div className="columns">
        <div className="column is-three-quarters">
          <Board></Board>
        </div>
        <div className="column is-2 m-3 box has-text-centered">
          <h2>Color</h2>
          <input type="color" className="input"></input>
          <br />
          <br />
          <button className="button is-danger is-outlined">Clear Board</button>
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
