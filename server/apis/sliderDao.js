var cors = require('cors');
var slider = require('../database/modals/Slider');
var mock = require('../debug/fetch');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

var debug = false;

module.exports = function(app) {
    app.get('/slider', cors(corsOptions), function(req, res) {
        if (debug === false) {
            slider.find().exec(function(error, slidersList) {
                if (error) {
                    return res.status(500).send(error);
                }
                return res.status(200).json(slidersList);
            });
        } else {
            mock.fetchMock('slider', function(data) {
                return res.status(200).json(data);
            });
        }
    });
};
