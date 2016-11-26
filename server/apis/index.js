var cors = require('cors');
var product = require('../database/modals/Product');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

module.exports = function(app) {

    app.get('/products', cors(corsOptions), function(req, res) {
        product.find().exec(function(error, products) {
            if (error) {
                  return res.status(500).send(error);
            }
            return res.status(200).json(products);
        });
    });

    app.get('/product/:id', cors(corsOptions), function(req, res) {
        product.findById(req.params.id, function(error, product) {
            if(error) {
                return res.status(500).send(error);
            }

            return res.status(200).json(product);
         });
    });

    app.get('/config', cors(corsOptions), function(req, res) {
        res.status(200).json('{"serviceTax": 20.5}');
    });
};
