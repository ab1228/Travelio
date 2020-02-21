const express = require('express');
var db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    ///take in params from search then render results and hbs
    app.get("/search/:location/:checkIn/:checkOut", function (req, res) {
        var hotel_location = req.params.location;
        var check_in = req.params.checkIn;
        var check_out = req.params.checkOut;
        console.log(hotel_location);
        db.Hotel.findAll({
            where: {
                location: hotel_location,
                checkIn: check_in,
                checkOut: check_out


            }
        }).then(function (hotels) {
            console.log(hotels);
            res.render("allrooms", { hotels });

        })
            .catch(function (err) {
                console.log(err);
            })
    });

    /// SHOWS ALL HOTELS
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

    app.get("/myHotel", function (req, res) {
        res.render('myhotel')
    });
    /// RENDER BUY.HBS
    app.get("/sale", function (req, res) {
        res.render("buy");
    });



    /// CREATES BOOKINGS
    app.post('/api/bookedRoom', function (req, res) {
        db.bookedRoom.create(req.body).then(function (bookedRoom) {
            res.json(bookedRoom).then(function () {
                res.render('roombooked')
            })
        }).catch(function (err) {
            console.log(err);
        })

    })









};

