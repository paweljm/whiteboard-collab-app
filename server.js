let path = require("path");
let express = require("express");
const { emit } = require("process");
let app = require("express")();
let httpServer = require("http").createServer(
  { requestCert: false, rejectUnauthorized: false },
  app
);
let io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

app.enable(`trust-proxy`);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/whiteboard/build"));
}

app.use(express.static(path.join(__dirname, "./frontend/whiteboard/build")));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./frontend/whiteboard/build", "index.html")
  );
});

let connections = [];

io.on("connection", (socket) => {
  connections.push(socket);
  console.log(`${socket.id} has joined`);

  socket.on("draw", (data) => {
    connections.forEach((con) => {
      if (con.id !== socket.id) {
        con.emit("onDraw", { x: data.x, y: data.y });
      }
    });
  });
  socket.on("down", (data) => {
    connections.forEach((con) => {
      if (con.id !== socket.id) {
        con.emit("onDown", { x: data.x, y: data.y });
      }
    });
  });
  socket.on("color", (data) => {
    connections.forEach((con) => {
      if (con.id !== socket.id) {
        con.emit("onColorSet", { color: data.color });
      }
    });
  });

  socket.on("clear", () => {
    connections.forEach((con) => {
      con.emit("onClear", {});
    });
  });

  socket.on("disconnection", (reason) => {
    console.log(`${socket.id} has left`);
    connections = connections.filter((con) => con.id !== socket.id);
  });
});

let PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => console.log(`server started on port ${PORT}`));
