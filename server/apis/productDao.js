var cors = require('cors');
var product = require('../database/modals/Product');
var mock = require('../debug/fetch');
var utils = require('./utils');
var loadFromFile = false;

module.exports = function(app) {
    app.get('/products', cors(utils.corsOptions), function(req, res) {
        if (loadFromFile === false) {
            product.find().exec(function(error, products) {
                if (error) return utils.throwError(res, message.SOMETHING_WENT_WRONG);
                return utils.throwSuccess(res, products);
            });
        } else {
            mock.fetchMock('products', function(products) {
                return utils.throwSuccess(res, products);
            });
        }
    });

    app.get('/product/:id', cors(utils.corsOptions), function(req, res) {
        if (loadFromFile === false) {
            product.findById(req.params.id, function(error, product) {
                if (error) return utils.throwError(res, message.SOMETHING_WENT_WRONG);
                return utils.throwSuccess(res, product);
            });
        } else {
            mock.fetchMock('product', function(product) {
                return utils.throwSuccess(res, product);
            });
        }
    });

    app.delete('/product/:id', cors(utils.corsOptions), function(req, res) {
        var id = req.params.id;
        product.remove({
            _id: id
        }, function(err) {
            if (!err) {
                return utils.throwSuccess(res);
            } else {
                return utils.throwError(response, message.SOMETHING_WENT_WRONG);
            }
        });
    });
};
