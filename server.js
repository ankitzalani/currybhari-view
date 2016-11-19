var express = require("express");
var app = express();
var cors = require('cors')
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(cors());

require('./server/index.js')(app);
require('./server/database/db.js')(app);

app.use(express.static(__dirname + '/client'));

app.listen(port, ip, function() {
    console.log("Listening on " + ip + ": " + port);
});
