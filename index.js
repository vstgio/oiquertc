var app = require("express")();
var http = require("http").Server(app);

app.get("/", function(request, response){
  response.send("<h1>hello world</h1>");
});

http.listen(3000, function(){
  console.log("working on *:3000");
});
