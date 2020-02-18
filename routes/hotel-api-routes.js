const express = require('express');
var db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;



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

    app.post('/api/bookedRoom', function (req, res) {
        var ref_Number = req.body.refNumber;
        var first_Name = req.body.firstName;
        var last_Name = req.body.LastName;
        var dateOf_Birth = req.body.dateOfBirth;
        var phone_Number = req.body.phoneNumber;
        var user_email = req.body.email;
        db.bookedRoom.create({
            refNumber: ref_Number,
            firstName: first_Name,
            lastName: last_Name,
            dateOfBirth: dateOf_Birth,
            phoneNumber: phone_Number,
            email: user_email

        }).then(function (bookedRoom) {
            console.log(bookedRoom);
        }).catch(function (err) {
            console.log(err);
        })

    })






};

