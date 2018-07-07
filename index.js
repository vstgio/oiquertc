var express = require("express")
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));

io.on("connection", function(socket) {
  console.log("+ a new user connected.");

  socket.on("disconnect", function() {
    console.log("- a user disconnected.")
  });

  socket.on("message", function(message) {
    io.emit("message", message);
  });
});

http.listen(3000, function(){
  console.log("> hi, it's working :)");
});
