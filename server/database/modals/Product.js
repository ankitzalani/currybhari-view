'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var ProductSchema = new Schema({
    name: String,
    description: String,
    rate: Number,
    image: String,
    otherImages: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
