var express = require("express")
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var connected_users = 0;

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));

io.on("connection", function(socket) {
  connected_users++;
  if (connected_users == 1) {
    io.emit("connected", "[você conectou ao chat e está sozinho no momento]");
  }
  else {
    io.emit("connected", "[uma nova pessoa conectou. usuárixs online: " + connected_users + "]");
  }

  socket.on("disconnect", function() {
    connected_users--;
    io.emit("disconnected", "[uma pessoa disconectou do chat. usuárixs online: " + connected_users + "]");
  });

  socket.on("message", function(message) {
    io.emit("message", message);
  });
});

http.listen(3000, function(){
  console.log("> hi, it's working :)");
});
