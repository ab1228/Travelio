const express = require('express');
var db = require("../models");



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });


    app.get("/allrooms", function (req, res) {
        db.Hotel.findAll()
            .then(function (hotels, cb) {
                console.log(hotels);
                res.render("allrooms", { hotels }, {
                    allowProtoMethodsByDefault: true,
                    allowProtoPropertiesByDefault: true
                });

            })
            .catch(function (err) {
                console.log(err);
            })

    });
    //     var hbsObject = {
    //         cats: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // });
    // });






};

