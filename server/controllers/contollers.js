var models = require('./models/models.js');

module.exports = {
  colleges: {
    get: function(req, res) {
      models.colleges.get(function(err, data) {
        if (err) {
          res
            .status(500)
            .send(err);
        } else {
          data = JSON.stringify(data);
          data = JSON.parse(data);
          res
            .status(200)
            .res(data);
        }
      });
    },
    getSuggestions: function(req, res) {
      models.colleges.getSuggestions(survey, function(err, data) {
        if (err) {
          res
            .status(500)
            .send(err);
        } else {
          data = JSON.stringify(data);
          data = JSON.parse(data);
          res
            .status(200)
            .res(data);
        }
      });
    }
  }
};