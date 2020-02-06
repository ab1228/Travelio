var db = require("../models");

module.exports = function (app) {
    app.get("/api/hotels", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Hotel.findAll({

        }).then(function (dbHotel) {
            res.json(dbHotel);
        });
    });







};

var path = require("path");


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/all-rooms', function (req, res) {
        res.render('allrooms');
    })



};