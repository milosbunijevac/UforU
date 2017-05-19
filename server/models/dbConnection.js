var mysql = require('mysql');

var connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

module.exports.connection = connection;