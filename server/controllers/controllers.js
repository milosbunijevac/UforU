var models = require('../models/models.js');

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
            .send(data);
        }
      });
    },
    getSuggestions: function(req, res) {
      var body = req.body;
      // console.log(body);
      for (let key in body) {
        if (body[key] === undefined || body[key] === '' || body[key].length === 0) {
          delete body[key];
        }
      }

      console.log(body);

      models.colleges.getSuggestions(body, function(err, data) {
        if (err) {
          res
            .status(500)
            .send(err);
        } else {
          // console.log('DATA WE GOT BACK', data);
          data = JSON.stringify(data);
          data = JSON.parse(data);
          res
            .status(200)
            .send(data);
        }
      });
    }
  }
};