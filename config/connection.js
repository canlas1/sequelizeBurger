const Sequelize = require('sequelize');

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_GOLD_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_GOLD_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect();

module.exports = connection;
