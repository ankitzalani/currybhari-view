var Model = require('objection').Model;

function Brand() {
  Model.apply(this, arguments);
}

Model.extend(Brand);
module.exports = Brand;

Brand.tableName = 'Brand';
