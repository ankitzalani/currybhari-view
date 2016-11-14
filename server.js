var express = require("express");
var app = express();
var cors = require('cors')
var port = process.env.PORT || 80;

app.use(cors());

// routes ======================================================================
require('./routes/endpoints.js')(app);

app.use(express.static(__dirname + '/app'));

app.listen(port, function() {
    console.log("Listening on port: " + port);
});
