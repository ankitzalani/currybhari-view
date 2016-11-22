var pg = require('pg');
var cors = require('cors');
var databaseURL = process.env.DATABASE_URL;
var mockObj = require('./debug/fetch.js');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

pg.defaults.ssl = true;

var debug = true;



module.exports = function(app) {
    app.get('/productDetails', cors(corsOptions), function(req, res) {

        if (debug == true) {
            mockObj.fetchMock('productDetails', function(data) {
                res.send(data);
            });
        } else {
            pg.connect(databaseURL, function(err, client) {
                if (err) throw err;
                client
                    .query('SELECT * FROM productDetails;', function(err, result) {
                        res.send(result.rows);
                    });
            });
        }
    });

    app.get('/config', cors(corsOptions), function(req, res) {
        console.log('config');
        if (debug == true) {
            mockObj.fetchMock('config', function(data) {
                res.send(data);
            });
        } else {
            pg.connect(databaseURL, function(err, client) {
                if (err) throw err;
                client
                    .query('SELECT * FROM CONFIG;', function(err, result) {
                        res.send(result.rows);
                    });
            });
        }
    });
};
