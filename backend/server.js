let app = require("express")();
let httpServer = require("http").createServer(app);
let io = require("socket.io")(httpServer);

io.on("connection", (socket) => {
  console.log("User Online");
});

let PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => console.log(`server started on port ${PORT}`));
