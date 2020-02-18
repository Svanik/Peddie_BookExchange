//Svanik Dani & Kishan J. Vyas
// Insert into tables and what not

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  port: "3306",
  user: "7fY7FODdcI",
  password: "8Nq9eWvZDS",
  database: "7fY7FODdcI"
});

function intoBookList(ISBNN, Titlee, Classs, Departmentt, Teacherr, Termm){
  con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
    var sql = "INSERT INTO `Book List` (`ISBN`, `Title`, `Class`, `Department`, `Teacher`, `Term`) VALUES ";
     var str = sql +"(" + "\'" + ISBNN + "\', " + "\'"+ Titlee + "\', " + "\'"  + Classs + "\', " + "\'" + Departmentt + "\', " + "\'" + Teacherr + "\', " + "\'"+ Termm + "\'" + ");";
     console.log(str);
     con.query(str, function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
     });
  });
}

function intoInventory(statuss, ISBN, price, bookcondition, selleremail, date, imagepath, id, title){
  con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
    var sql = "INSERT INTO `Inventory` (`status`, `ISBN`, `price`, `bookcondition`, `selleremail`, `date` , `imagepath`, `id`, `title`) VALUES ";
     var str = sql +"(" + "\'" + statuss + "\', " + "\'"+ ISBN + "\', " + "\'"  + price + "\', " + "\'" + bookcondition + "\', " + "\'" + selleremail + "\', " + "\'"+ date + "\', " + "\'"+ imagepath + "\', " + "\'"+ id  + "\', " + "\'"+ title + "\'" + ");";
     console.log(str);
     con.query(str, function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
     });
  });
}

function intoUsers(email, fname, lname){
  con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
    var sql = "INSERT INTO `Users` (`Email`, `First Name`, `Last Name`) VALUES ";
     var str = sql +"(" + "\'" + email + "\', " + "\'"+ fname + "\', " + "\'"  + lname + "\'" + ");";
     console.log(str);
     con.query(str, function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
     });
  });
}

function intoImages(URL, Image){
  con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
    var sql = "INSERT INTO `Images` (`URL`, `Image`) VALUES ";
     var str = sql +"(" + "\'" + URL + "\', " + "\'"+ Image + "\'" + ");";
     console.log(str);
     con.query(str, function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
     });
  });
}

intoImages('svanikdaniandkishanvyas.com', 'SDKJ.jpg');
