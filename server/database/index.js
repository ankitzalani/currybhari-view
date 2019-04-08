'use strict';

var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.MONGO_URI, {server: { auto_reconnect: true,  useMongoClient: true }});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
});

if (config.INITIALIZE_DB) {
    require('./seed');
}
