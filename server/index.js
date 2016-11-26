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
          .query('SELECT * FROM productDetails;', function(err,
            result) {
            res.send(result.rows);
          });
      });
    }
  });

  app.get('/product', cors(corsOptions), function(req, res) {
    res.send({
      "productid": "1",
      "name": "Methi Vada",
      "description": "Best Methi Vada",
      "rate": "100",
      "image": "./images/home/1.jpg",
      "images": ["./images/product-details/1.jpg",
        "./images/product-details/similar1.jpg",
        "./images/product-details/similar2.jpg"
      ]
    });
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
