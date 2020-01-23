var express = require('express');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8001;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

