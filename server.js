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


// pg.defaults.ssl = true;
// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
var client = new pg.Client();

// connect to our database
client.connect(function (err) {
  if (err) throw err;

  // execute a query on our database
  client.query('SELECT * from productdetails', [process.env.DATABASE_URL], function (err, result) {
    if (err) throw err;

    // just print the result to the console
    console.log(result.rows[0]); // outputs: { name: 'brianc' }

    // disconnect the client
    client.end(function (err) {
      if (err) throw err;
    });
  });
});


// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
//
//     client
//       .query('SELECT * FROM productdetails;')
//       .on('row', function(row) {
//         console.log(JSON.stringify(row));
//       });
// });
