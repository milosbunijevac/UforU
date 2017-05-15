var mysql = require('mysql');

var connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL || {host: '127.0.0.1', user: 'root', password: '', database: 'UFORU'});

// connection.connect();

module.exports.connection = connection;