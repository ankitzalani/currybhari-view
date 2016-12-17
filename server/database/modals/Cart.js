'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = new Schema({
    address: String,
    city: String,
    postCode: String,
    country: String,
    region: String
});

var UserSchema = new Schema({
    name: String,
    email: String,
    role: {
        type: String,
        default: 'user'
    },
    hashedPassword: String,
    salt: String,
    addresses: [AddressSchema]
});

var ProductSchema = new Schema({
    'id': String,
    'product': String,
    'rate': String,
    'quantity': String,
    'total': String
});

var CartSchema = new Schema({
    user: [UserSchema],
    product: [ProductSchema],
    subTotal: String,
    tax: String,
    grandTotal: String
});

module.exports = mongoose.model('Cart', CartSchema);
