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

    app.get('/postCode', cors(utils.corsOptions), function(request, response) {
        mock.fetchMock('postCode', function(postCodes) {
            return utils.throwSuccess(response  , postCodes);
        });
    });
}
