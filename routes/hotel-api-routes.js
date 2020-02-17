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

    app.post('/purchase/:firstName/:lastName/:dateOfBirth/:phoneNumber/:email:', function (req, res) {
        var firstName = req.params.firstName;
        var lastName = req.params.LastName;
        var dateOfBirth = req.params.dateOfBirth;
        var phoneNumber = req.params.phoneNumber;
        var email = req.params.email;
        db.bookedRoom.create({
            firstName = firstName,
            lastName = lastName,
            dateOfBirth = dateOfBirth,
            phoneNumber = phoneNumber,
            email = email

        }).then(function (bookedRoom) {
            console.lop(bookedRoom);
        }).catch(function (err) {
            console.log(err);
        })

    })






};

