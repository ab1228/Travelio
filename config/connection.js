// Dependencies

// require('dotenv').config()
// var Sequelize = require("sequelize");

// // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     port: 3306,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;
require("dotenv").config();
// require mysql
var mysql = require('mysql');


var config = {
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    // grab password from .env
    password: DB_PASS,
    database: DB_DB
}
var connection;

var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    connection = mysql.createConnection(config);
    host = 'localhost';
}

// connect to database
connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected");
});

// export connection
module.exports = conn;