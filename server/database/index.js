'use strict';

var mongoose = require('mongoose');
var config = require('../config');

console.log('MONGO_URI: ' + config.MONGO_URI);
mongoose.connect(config.MONGO_URI, {server: { auto_reconnect: true }});
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
});

if (config.INITIALIZE_DB) {
    require('./seed');
}
