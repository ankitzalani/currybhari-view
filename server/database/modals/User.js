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

module.exports = mongoose.model('User', UserSchema);
