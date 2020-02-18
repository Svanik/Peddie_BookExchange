var mysql = require('mysql');


function getBookByISBN(isbn)
{
var connection = mysql.createConnection({
  host:"remotemysql.com",
  user:"7fY7FODdcI",
  password:"8Nq9eWvZDS",
  database: "7fY7FODdcI",
  port: 3306
});

connection.connect(function(err) {
  if(err) throw err;
  connection.query("SELECT * FROM BookList WHERE ISBN = " + mysql.escape(isbn), function (err, result){
    if (err) throw err;
    console.log(result);
    return result;
  });

});
}

//Example Test
//getBookByISBN('9780143128540');
