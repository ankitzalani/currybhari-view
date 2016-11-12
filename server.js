var express = require("express");
var pg = require('pg');
var app = express();
var port = process.env.PORT || 9000;
var databaseURL = process.env.DATABASE_URL || 'postgres://gszdjrbvwmazqj:SVnFU-4h5ligf-mdZ7ngurrPf8@ec2-54-163-245-3.compute-1.amazonaws.com:5432/d3cjnek3hla7ba';

app.use(express.static(__dirname + '/app'));
app.get("/", function(req, res) {
    res.sendfile("index.html");
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});

pg.defaults.ssl = true;

app.get("/productDetails", function(req, res) {
    pg.connect(databaseURL, function(err, client) {
        if (err) throw err;
        client
            .query('SELECT * FROM productDetails;', function(err, result) {
                res.status(200).json(result.rows);
            });
    });
});
