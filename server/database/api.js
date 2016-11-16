var Brand = require('../models/Brand.js');
var cors = require('cors')

module.exports = function(app) {
    app.get('/testDB', function(req, res) {

        Brand
            .query()
            .then(function(brands) {
                res.send(brands);
            });
    });

};
