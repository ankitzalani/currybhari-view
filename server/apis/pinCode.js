var cors = require('cors');
var mock = require('../debug/fetch');
var bodyParser = require('body-parser');
var message = require('../messages');
var utils = require('./utils');
var debug = false;

module.exports = function(app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/pincode', cors(utils.corsOptions), function(request, response) {
        mock.fetchMock('pinCode', function(pinCodes) {
            return utils.throwSuccess(response  , pinCodes);
        });
    });
}
