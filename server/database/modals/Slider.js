'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SliderSchema = new Schema({
    name: String,
    description: String,
    image: String,
    redirectURL: String
});

module.exports = mongoose.model('Slider', SliderSchema);
