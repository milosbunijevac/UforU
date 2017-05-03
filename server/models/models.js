var connection = require('./dbConnection').connection;

module.exports = {
  colleges: {
    get: function(cb) {
      connection.query('SELECT name, address, state, description, admission_rate, tuition, size, average_gpa, average_sat_score, sports_division, website_url, image_url', function(err, results, fields) {
        if (err) {
          cb (err, null);
        } else {
          cb(null, data);
        }
      });
    },
    getSuggestions: function(parameters, cb) {
      
    }
  }
};