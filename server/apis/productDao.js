var cors = require('cors');
var product = require('../database/modals/Product');
var mock = require('../debug/fetch');
var utils = require('./utils');
var loadFromFile = false;
var message = require('../messages');
var multer = require('multer');

var filenameStr = '';

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, './client/images/uploads');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        filenameStr = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null, filenameStr);
    }
});


var upload = multer({ //multer settings
    storage: storage
}).single('file');

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

    app.post('/product', cors(utils.corsOptions), function(request, response) {
        var productObj = request.body.product;

        var prod = new product({
            name: productObj.name,
            description: productObj.description,
            rate: productObj.rate,
            image: productObj.image,
            otherImages: productObj.otherImages
        });

        prod.save(function(error, prod) {
            if (error) return utils.throwError(response, message.SOMETHING_WENT_WRONG);
            return utils.throwSuccess(response, {});
        });
    });

    /** API path that will upload the files */
    app.post('/product/image/upload', function(req, res) {
        filenameStr = '';
        upload(req, res, function(err) {
            if (err) {
                return res.json({
                    error_code: 1,
                    err_desc: err
                });
            }
            return res.json({
                error_code: 0,
                err_desc: null,
                file_name: filenameStr
            });
        });
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
