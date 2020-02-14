/*
  *The SeniorPurge function deletes every user that has the graduate years of the current year from the Users table.
  *KP & Ellen
*/
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "7fY7FODdcI",
  password: "8Nq9eWvZDS",
  database: "7fY7FODdcI",
  port:3306
});
let date_ob = new Date();
var year = date_ob.getFullYear()-2000;

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  console.log(year);
  var sql = "DELETE FROM Users WHERE Email LIKE" + con.escape('%'+year+'%');
 con.query(sql, function (err, result) {
   if (err) throw err;
   console.log("Number of users deleted: " + result.affectedRows);
 });
});
