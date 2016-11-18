var pg = require('pg');
var cors = require('cors')
var databaseURL = process.env.DATABASE_URL;

pg.defaults.ssl = true;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

module.exports = function(app) {
  app.get('/productDetails', cors(corsOptions), function(req, res) {
      pg.connect(databaseURL, function(err, client) {
          if (err) throw err;
          client
              .query('SELECT * FROM productDetails;', function(err, result) {
                  res.send(result.rows);
              });
      });
  });

  app.get('/productDetails/:id', function(req, res) {
      pg.connect(databaseURL, function(err, client) {
          if (err) throw err;
          client
              .query('SELECT * FROM productDetails where productId=' + req.params.id + ';', function(err, result) {
                  res.status(200).json(result.rows);
              });
      });
  });
};
