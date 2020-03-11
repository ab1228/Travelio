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
    /// RENDER MYHOTEL PAGE
    // app.get("/myHotel", function (req, res) {
    //     res.render('myhotel')
    // });
    app.get("/myHotel", function (req, res) {
        res.render('hotelLogIn')
    });
    /// RENDER BUY.HBS
    app.get("/sale/:roomId", function (req, res) {
        console.log(req.params.roomId)
        res.render("buy",
            { hotelId: req.params.roomId });
    });
    //// RENDER CONTACT PAGE
    app.get("/contact", function (req, res) {
        res.render("contact")
    })
    ///TO GET BOOKINGS
    app.get("/bookedRoom/firstName/:firstName/lastName/:lastName/email/:email/phoneNumber/:phoneNumber", function (req, res) {

        var first_Name = req.params.firstName;
        var last_Name = req.params.lastName;
        // var date_Of_Birth = req.params.dateOfbirth;
        var user_email = req.params.email;
        var phone_Number = req.params.phoneNumber;
        console.log(req.params);
        db.bookedRoom.findAll({
            where: {
                firstName: first_Name,
                lastName: last_Name,
                // dateOfBirth: date_Of_Birth,
                email: user_email,
                phoneNumber: phone_Number
            },

            include:
                [{
                    model: db.Hotel,

                }]


        }).then(function (rooms) {
            console.log(rooms);
            res.render("roomBooked", { rooms });

        })
            .catch(function (err) {
                console.log(err);
            })
    });



    /// CREATES BOOKINGS
    app.post('/api/bookedRoom', function (req, res) {

        console.log(req.body);
        db.bookedRoom.create(req.body).then(function (bookedRoom) {
            res.json(bookedRoom);
        }).catch(function (err) {
            console.log(err);
        })

    });



    ///DELETE BOOKING

    app.delete("/api/deleteBookings/:roomId", function (req, res) {

        console.log(req.params.roomId)
        db.bookedRoom.destroy({
            where: {
                refNumber: req.params.roomId
            }
        }).then(function (dbroom) {
            res.json(dbroom);
        })

    });



};

