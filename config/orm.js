var connection = require("./connection.js");

var orm = {
// selectAll()
  // insertOne()
  // updateOne()
  
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    }); 
  },
    // selectWhere: function(tableInput, colToSearch, valOfCol) {
    //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },
    // selectAndOrder: function(whatToSelect, table, orderCol) {
    //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //   console.log(queryString);
    //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },
    // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //   var queryString =
    //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
    //   connection.query(
    //     queryString,
    //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //     function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     }
    //   );
    // }

  //   leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
  //     var queryString = "SELECT ?? FROM ?? AS tOne";
  //     queryString += " LEFT JOIN ?? AS tTwo";
  //     queryString += " ON tOne.?? = tTwo.??";
  
  //     console.log(queryString);
  
  //     connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
  //       err,
  //       result
  //     ) {
  //       if (err) throw err;
  //       console.log(result);
  //     });
  //   }
  // };
  };
  
  module.exports = orm;