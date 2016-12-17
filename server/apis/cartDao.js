var cors = require('cors');
var mock = require('../debug/fetch');
var Cart = require('../database/modals/Cart');
var bodyParser = require('body-parser');
var message = require('../messages');
var utils = require('./utils');
var debug = false;

var createUserObjResponse = function(cartObj) {
    return {
        _id: cartObj._id,
        product: cartObj.product,
        productname: cartObj.productname,
        rate: cartObj.rate,
        user: cartObj.userObj
    }
}

module.exports = function(app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/cart', cors(utils.corsOptions), function(request, response) {
            var cart = new Cart({
                user: request.body.user,
                product: request.body.product,
                subTotal: request.body.subTotal,
                tax: request.body.tax,
                grandTotal: request.body.grandTotal
            });

            cart.save(function(error, cartObj) {
                if (error) return utils.throwError(res, message.SOMETHING_WENT_WRONG);
                return utils.throwSuccess(response, createUserObjResponse(cartObj));
            });
    });
}
