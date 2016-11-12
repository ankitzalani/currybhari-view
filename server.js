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

console.log(process.env.DATABASE_URL);

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

    // client
    //   .query('SELECT * FROM productdetails;')
    //   .on('row', function(row) {
    //     console.log(JSON.stringify(row));
    //   });
});
