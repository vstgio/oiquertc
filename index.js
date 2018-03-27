var express = require("express")
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));

io.on("connection", function(socket) {
  console.log("+ USER CONNECTED.");

  socket.on("disconnect", function(){
    console.log("- USER DISCONNECTED.")
  });

  socket.on("message", function(message){
    console.log("> NEW MESSAGE: " + message);
  });
});

http.listen(3000, function(){
  console.log("> WORKING ON *:3000");
});
