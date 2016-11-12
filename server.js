var express = require("express");
var pg = require('pg');
var app = express();
var port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/app'));
app.get("/", function(req, res){
  res.sendfile("index.html");
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});

var service = require("./service");

var databaseURL = process.env.DATABASE_URL || 'postgres://gszdjrbvwmazqj:SVnFU-4h5ligf-mdZ7ngurrPf8@ec2-54-163-245-3.compute-1.amazonaws.com:5432/d3cjnek3hla7ba';

pg.defaults.ssl = true;
pg.connect(databaseURL, function(err, client) {
  if (err) throw err;
    client
      .query('SELECT * FROM productdetails;')
      .on('row', function(row) {
        console.log(JSON.stringify(row));
      });
});

app.get("/productDetails", function(req, res) {
  pg.connect(databaseURL, function(err, client) {
    if (err) throw err;
    client
      .query('SELECT * FROM productdetails;', function (err, result) {
          res.status(200).json(result.rows);
      });
  });
});
