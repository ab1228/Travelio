var express = require('express');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8006;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


require("./routes/hotel-api-routes.js")(app);

var db = require("./models");
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('server started at http://localhost:' + PORT);
    });
}); 