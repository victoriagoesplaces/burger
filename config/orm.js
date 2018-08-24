var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

  
var orm = {
// selectAll()
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    }); 
  },

  // insertOne()
    create: function(tableInput, cols, vals, cb) {
      var queryString = "INSERT INTO " + tableInput;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

  // updateOne()

  update: function(tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

  module.exports = orm;