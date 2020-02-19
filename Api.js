var mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "7fY7FODdcI",
    password: "8Nq9eWvZDS",
    database: "7fY7FODdcI",
    port: 3306
});

function parseJSON(json){
  return JSON.parse(json);
}

// GETS
// __________________________________________________________________________________

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

/** Returns all listings from a given user email
  * @param {String} isbn
  * @return {JSON} Book List entery with given ISBN if such entery exsist
*/
function getBookByISBN(isbn){
con.connect(function(err) {
  if(err) throw err;
  con.query("SELECT * FROM BookList WHERE ISBN = " + mysql.escape(isbn), function (err, result){
    if (err) throw err;
    console.log(result);
    return result;
  });

});
}

// Purge
//__________________________________________________________________________

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

// Sorts and Searches
//______________________________________________________________________

/**
  * Gets Sorst by price
  * @param  {Null} none
  * @return {Json} Json string sorting inventory by price
*/
function SortByPrice() {
    //Returns result object of books sorted by price low to high
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Price", function (err, result) {
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
    sql = "SELECT ISBN FROM Inventory WHERE title LIKE \'%"  + keyword + "%\'";
    console.log(sql)
    con.connect(function (err) {
        if (err) throw err;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("DONE");
            console.log(result);
            return result;
        });
    });
}

// Delete form tabel
// __________________________________________________________________________________
/**
  * Removes Listing from db using ID
  * @param {int} ID
  * @return {Null}
*/
function deleteListing(id){
  let sql = `DELETE FROM todos WHERE id = x`;
  con.query(sql, id, (error, results, fields) => {
    if (error)
      return console.error(error.message);
  });
}

//Inserts into tabels
//______________________________________________________________

/** Inserts Data into Book List Tabel
  * @param {Strings} (ISBN, Title, Class, Department, Teacher, Term)
  * @return null
*/
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

/** Inserts Data into Inventory Tabel
  * @param {Strings} (status, ISBN, price, book condition, seller email, date, image path, id, title)
  * @return null
*/
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

/** Inserts Data into Users Tabel
  * @param {Strings} (Email, First Name, Last Name)
  * @return null
*/
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

/** Inserts Data into Image
  * @param {Strings} (Url, Image)
  * @return null
*/
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

