/**
  *KP & Ellen
  SeniorPurge() deletes all the senior in the Users.
  SeniorPostPurge() deletes all the post of senior in the Inventory.
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

function SeniorPostPurge(){
  con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    console.log(year);
    var sql = "DELETE FROM Inventory WHERE selleremail LIKE" + con.escape('%'+year+'%');
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Number of records deleted: " + result.affectedRows);
   });
  });
}
function SeniorPurge(){
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
}
SeniorPurge();
