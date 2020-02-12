const express = require('express');
var db = require("../models");



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });


    app.get("/allrooms", function (req, res) {
        db.Hotel.findAll()
            .then(function (hotels) {
                console.log(hotels);
                res.render("allrooms", { hotels });

            })
            .catch(function (err) {
                console.log(err);
            })

    });
    app.get("/sale", function (req, res) {
        res.render("buy");
    });

    app.get("/search/:location/:checkIn/:checkOut", function (req, res) {
        db.Hotel.findAll({
            where: {
                location: req.params.location,
                checkIn: req.params.checkIn,
                checkOut: req.params.checkOut


            }
        }).then(function (hotels) {
            console.log(hotels);
            res.render("allrooms", { hotels });

        })
            .catch(function (err) {
                console.log(err);
            })
    })






};

