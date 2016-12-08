var cors = require('cors');
var mock = require('../debug/fetch');
var User = require('../database/modals/User');

var bodyParser = require('body-parser');

var debug = false;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

module.exports = function(app) {
    app.use(bodyParser.urlencoded());

    app.post('/user', cors(corsOptions), function(req, res) {
        var user = new User({
            name: req.body.username,
            email: req.body.email,
            hashedPassword: req.body.password,
            salt: 'salt',
            addresses: [{
                address: req.body.address,
                city: req.body.city,
                postCode: req.body.postCode,
                country: req.body.country,
                region: req.body.region
            }]
        });

        user.save(function(err, usr) {
            if (err) {
                return next(err);
            }
            res.json(201, req.body);
        });
    });

    app.get('/user', cors(corsOptions), function(req, res) {
        User.findOne({
            'name': req.query.username
        }, function(err, u) {
            if (err) res.json(201, {
                error: 'Something went wrong while getting username: ' + err
            });
            if (u && req.query.password === u.hashedPassword) {
                res.json(201, {
                    username: u.name
                });
            } else {
                res.json(201, {
                    error: 'Invalid Credentials'
                });
            }
        })
    });
}
