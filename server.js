var express = require('express');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8003;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/html-routes')(app);


app.listen(PORT, function () {
    console.log('App now listening at localhost: ' + PORT);
});