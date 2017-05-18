var connection = require('./dbConnection').connection;
var mySearchFunction = require('./queryHelper.js').mySearchFunction;
var asyncMap = require('./queryHelper.js').asyncMap;
var querySchoolTable = require('./queryHelper.js').querySchoolTable;

module.exports = {
  colleges: {
    get: function(cb) {
      connection.query('SELECT name, address, state, description, admission_rate, tuition, size, average_gpa, average_sat_score, sports_division, website_url, image_url FROM Universities', function(err, results, fields) {
        if (err) {
          cb (err, null);
        } else {
          cb(null, results);
        }
      });
    },
    getSuggestions: function(params, cb) {
      mySearchFunction(params, function(err, data) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
    }
  },

  signup: {
    post: function(username, password, cb) {
      console.log('beginning of model function for signup');
      connection.query('SELECT * from Users Where username = ?', username, function(err, results, fields) {
        if (err) {
          cb(err, null);
        } else {
          if (results.length !== 0) {
            console.log('USER EXISTS', results);
            cb('User already exists', null);
          } else {
            connection.query('Insert into Users (username, password) Values ("' + username + '","' + password + '")', function(err, results, fields) {
              if (err) {
                cb(err, null);
              } else {
                cb(null, 'User successfully created');
              }
            });
          }
        }
      });
    }
  }
};