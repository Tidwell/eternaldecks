var config = require('./config');
var express = require('express');
var app = express();

app.use(express.static(config.publicDir));

app.listen(config.port);