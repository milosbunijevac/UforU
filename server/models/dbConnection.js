var mysql = require('mysql');

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || {});

connection.connect();

module.exports.connection = connection;