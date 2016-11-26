'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var ProductSchema = new Schema({
    name: String,
    description: String,
    rate: Number,
    image: String
});

// Getter
ProductSchema.path('rate').get(function(num) {
    return (num / 100).toFixed(2);
});

// Setter
ProductSchema.path('rate').set(function(num) {
    return num * 100;
});

module.exports = mongoose.model('Product', ProductSchema);
