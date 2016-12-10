var cors = require('cors');
var mock = require('../debug/fetch');
var User = require('../database/modals/User');
var bodyParser = require('body-parser');
var message = require('../messages');
var utils = require('./utils');
var debug = false;

var createUserObjResponse = function(userObj) {
    return {
        _id: userObj._id,
        username: userObj.name,
        email: userObj.email,
        addresses: userObj.addresses
    }
}

module.exports = function(app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/user', cors(utils.corsOptions), function(request, response) {
        User.findOne({
            'name': request.body.username
        }, function(error, user) {
            if (user && user.name) {
                utils.throwError(response, message.ALREADY_REGISTERED);
            } else {
                var user = new User({
                    name: request.body.username,
                    email: request.body.email,
                    hashedPassword: request.body.password,
                    salt: 'salt'
                });

                user.save(function(error, userObj) {
                    if (error) {
                        utils.throwError(res, message.SOMETHING_WENT_WRONG);
                    }
                    utils.throwSuccess(res, createUserObjResponse(userObj));
                });
            }
        });
    });

    app.get('/user', cors(utils.corsOptions), function(request, response) {
        User.findOne({
            'name': request.query.username
        }, function(error, userObj) {
            if (error) {
                utils.throwError(response, message.SOMETHING_WENT_WRONG);
            }
            if (userObj && request.query.password === userObj.hashedPassword) {
                utils.throwSuccess(response, createUserObjResponse(userObj));
            } else {
                utils.throwError(response, message.INVALID_CREDENTIALS);
            }
        })
    });

    app.put('/address', cors(utils.corsOptions), function(request, response) {
        User.find({
            _id: request.body.user._id
        }, function(error, user) {
            user[0].addresses.push(request.body.address);
            user[0].save(function(error) {
                if (error) {
                    utils.throwError(response, message.SOMETHING_WENT_WRONG);
                } else {
                    utils.throwSuccess(response);
                }
            });
        });
    });
}
