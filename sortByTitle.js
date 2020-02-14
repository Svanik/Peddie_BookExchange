var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "7fY7FODdcI",
  password: "8Nq9eWvZDS",
  database: "7fY7FODdcI"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Inventory ORDER BY title", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
