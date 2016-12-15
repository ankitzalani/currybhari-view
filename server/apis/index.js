var cors = require('cors');
var slider = require('../database/modals/Slider');
var mock = require('../debug/fetch');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

var debug = false;

module.exports = function(app) {
    require('./productDao')(app);
    require('./userDao')(app);
    require('./sliderDao')(app);
    require('./configDao')(app);
    require('./postCodeDao')(app);
};
