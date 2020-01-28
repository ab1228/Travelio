var express = require('express');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8001;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.listen(PORT, function () {
    console.log('App now listening at localhost: ' + PORT);
});