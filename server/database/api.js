var Brand = require('../models/Brand.js');

module.exports = function (app) {
  Brand
        .query()
        .then(function (brands) {
          console.log(brands);
        });
};
