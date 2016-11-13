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

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

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

app.get("/productDetails/:id", function(req, res) {
    pg.connect(databaseURL, function(err, client) {
        if (err) throw err;
        client
            .query('SELECT * FROM productDetails where productId=' + req.params.id + ';', function(err, result) {
                res.status(200).json(result.rows);
            });
    });
});
