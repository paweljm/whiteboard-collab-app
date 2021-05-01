let app = require("express")();
let httpServer = require("http").createServer(app);
let io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/whiteboard/build"));
}

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
        con.emit("onColorSet", { color: "" });
      }
    });
  });

  socket.on("disconnection", (reason) => {
    console.log(`${socket.id} has left`);
    connections = connections.filter((con) => con.id !== socket.id);
  });
});

let PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => console.log(`server started on port ${PORT}`));
