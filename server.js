// var express = require("express");
// var app = express();
// var port = process.env.PORT || 9000;
//
// app.use(express.static(__dirname + '/app'));
// app.get("/", function(req, res){
//   res.sendfile("index.html");
// });
//
// app.listen(port, function() {
//     console.log("Listening on port " + port);
// });
//
//

var http = require('http');
var express = require('express');

// Requiring express exports a function that creates the application. Call it!
var app = express();

// Set port to listen to
app.set('port', process.env.PORT || 9000);

app.use(express.static(__dirname + '/app'));


// Tell express to use the router middleware
// Can be omitted if precedence doesn't matter
// (e.g. for loading static resources)
app.use(app.router);

// Add callback handler for home (/) route
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Create http server by passing "app" to it:
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
