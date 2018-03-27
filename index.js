var express = require("express")
var app = express();
var http = require("http").Server(app);

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));

http.listen(3000, function(){
  console.log("working on *:3000");
});
