var connection = require('./dbConnection').connection;

var asyncMap = function(tasks, cb) {
  let results = [];
  let remaining = tasks.length;
  tasks.forEach((task, i) => {
    task((result) => {
      results.push(result);
      remaining -= 1;
      if (remaining === 0) {
        cb(results);
      }
    });
  });
};  

var querySchoolTable = function(column, value, cb) {
  console.log('column', column);
  console.log('value', value);
  var options = [column, value];
  connection.query('SELECT * FROM Universities WHERE ? = ?', options, function(err, results, fields) {
    console.log('MY RESULTS', results);
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
          console.log('IM ERRORING', err);
          cb(err, null);
        } else {
          console.log('MY RESULTS', data);
          cb(null, data);
        }
      });
    });
  }
  console.log('THE QUERIES', queries);
  asyncMap(queries, function(arrOfData) {
    // and here arrOfData is an array of arrays, the inner arrays represent the result of querying the table for a given column/value pair (like STATE='CA' or MAJOR='Computer Science' or whatever);
    // now you can just sort it using whatever method you want
    console.log('THE QUERIES INSIDE ASYNCMAP', queries);
    console.log('THE RESULT', arrOfData);
  });
};

module.exports.asyncMap = asyncMap;
module.exports.querySchoolTable = querySchoolTable;
module.exports.mySearchFunction = mySearchFunction;
