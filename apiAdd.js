//Svanik Dani and Kishan Vyas

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "7fY7FODdcI",
    password: "8Nq9eWvZDS",
    database: "7fY7FODdcI",
    port: 3306
});



/**
  * Gets Book Data from ISBN
  * @param  {String} isbn
  * @return {String} json
*/
function getBookDataFromISBN(isbn){
  con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM book_list", function (err, result) {
          if (err) throw err;
          return result;
      });
  });
}


/**
  * Removes Listing from db using ID
  * @param {int} ID
  * @return {Null}
*/
function deleteListing(int id){
  let sql = `DELETE FROM todos WHERE id = x`;
  connection.query(sql, id, (error, results, fields) => {
    if (error)
      return console.error(error.message);

  });
}


/**
  * Gets Book Data from ISBN
  * @param  {String} isbn
  * @return {String} json
*/
function getBookDataFromISBN(isbn){
  con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM book_list", function (err, result) {
          if (err) throw err;
          return result;
      });
  });
}


/** Returns all listings from a given user email
  * @param {String} email
  * @return {JSON} userListings
*/
function getListingsByUser(email) {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory WHERE selleremail = " + mysql.escape(email), function (err, result) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}

/** Auto purges listings from sellers who graduated, no args no returns.
  * @param {none}
  * @return {none}
*/
function purgeSeniors(){
  let date_ob = new Date();
  var year = date_ob.getFullYear()-2000;

  con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    console.log(year);
    var sql = "DELETE FROM Inventory WHERE selleremail LIKE" + con.escape('%'+year+'%');
    // DELETES LISTINGS
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Number of records deleted: " + result.affectedRows);
   });
   // DELETES USERS
   sql = "DELETE FROM Users WHERE Email LIKE" + con.escape('%'+year+'%');
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Number of records deleted: " + result.affectedRows);
   });
  });

}


/**

*/
function sortByPrice() {
    //Returns result object of books sorted by price (ascending order)
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY PRICE", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}

/** Searches Inventory
  * @param {String} Search keyword
  * @return {JSON} List of Books
*/
function searchInventory(keyword) {
    //Returns result object of books sorted by price (ascending order)
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT ISBN FROM Inventory WHERE title LIKE %"  + keyword + "%", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}
