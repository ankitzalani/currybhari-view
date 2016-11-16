var Model = require('objection').Model;

function Products() {
    Model.apply(this, arguments);
}

Model.extend(Products);
module.exports = Products;

Brand.tableName = 'Products';
