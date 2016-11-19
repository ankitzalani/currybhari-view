var express = require("express");
var app = express();
var cors = require('cors')
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(cors());

require('./server/index.js')(app);
require('./server/database/db.js')(app);

app.use(express.static(__dirname + '/client'));

app.listen(port, function() {
    console.log("Listening on port: " + port);
});
