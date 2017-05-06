var connection = require('./dbConnection').connection;

var asyncMap = function(tasks, cb) {
  let results = [];
  let remaining = tasks.length;
  tasks.forEach((task, i) => {
    task((err, result) => {
      results[i] = result;
      remaining -= 1;
      if (remaining === 0) {
        cb(results);
      }
    });
  });
};

var querySchoolTable = function(column, value, cb) {
  if (column === 'tuition') {
    let max = value;
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' < ?', [value], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  } else if (column === 'size') {
    let min = value[0];
    let max = value[1];
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' BETWEEN ? AND ?', [min, max], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  } else if (column === 'majors') {
    for (let i = 0; i < value.length; i++) {
      connection.query('SELECT * FROM Universities WHERE id IN (SELECT university_id FROM majors_universities WHERE major_id IN (SELECT id FROM Majors WHERE major = ?))', [value[i]], function(err, results, fields) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  } else {
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' = ?', [value], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  }
  

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
          // console.log('MY RESULTS', data);
          cb(null, data);
        }
      });
    });
  }
  // console.log('THE QUERIES', queries);
  asyncMap(queries, function(arrOfData) {
    // and here arrOfData is an array of arrays, the inner arrays represent the result of querying the table for a given column/value pair (like STATE='CA' or MAJOR='Computer Science' or whatever);
    // now you can just sort it using whatever method you want
    // console.log('THE QUERIES INSIDE ASYNCMAP', queries);
    console.log('THE RESULT', arrOfData);
    cb(null, arrOfData);
  });
};

// [ [{school object one}, {school object 2}],  [],[] ]
// flatten the arrays into one

module.exports.asyncMap = asyncMap;
module.exports.querySchoolTable = querySchoolTable;
module.exports.mySearchFunction = mySearchFunction;
