var connection = require('./dbConnection').connection;

var asyncMap = function(tasks, cb) {
  let results = [];
  let remaining = tasks.length;
  tasks.forEach((task, i) => {
    task((result) => {
      results[i] = result;
      remaining -= 1;
      if (remaining === 0) {
        cb(results);
      }
    });
  });
};  

var querySchoolTable = function(column, value, cb) {
  connection.query('SELECT * FROM Universities WHERE ? = ?', [column, value], function(err, results, fields) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var mySearchFunction = function(prefs, cb) {
  let queries = [];
  for (let key in prefs) {
    queries.push(function(cb) {
      querySchoolTable(key, prefs[key], function(err, data) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
    });
  }
  asyncMap(queries, function(arrOfData) {
    // and here arrOfData is an array of arrays, the inner arrays represent the result of querying the table for a given column/value pair (like STATE='CA' or MAJOR='Computer Science' or whatever);
    // now you can just sort it using whatever method you want
    console.log(arrOfData);
  });
};

module.exports.asyncMap = asyncMap;
module.exports.querySchoolTable = querySchoolTable;
module.exports.mySearchFunction = mySearchFunction;
