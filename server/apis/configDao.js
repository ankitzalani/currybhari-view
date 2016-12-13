var cors = require('cors');
var slider = require('../database/modals/Slider');
var mock = require('../debug/fetch');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

var debug = false;

module.exports = function(app) {
    app.get('/config', cors(corsOptions), function(req, res) {
        res.status(200).json('{"serviceTax": 20.5}');
    });
};
