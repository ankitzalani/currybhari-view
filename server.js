var express = require("express");
var app = express();
var port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/app', 'public'));
app.get("/", function(req, res){
  res.sendfile("index.html");
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});
