var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "bd1c6a7c6db8bc",
  password: "8ca72168",
  database: "heroku_af9a5e472645ed1",
  port:3306
});


function parseJSON(json){
  return JSON.parse(json);
}

// GETS
// __________________________________________________________________________________

/**
  * Gets Book Data from ISBN
  * Matt
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
  * Matt
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
  * Rohan and Aarav
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

// Sorts and Searches
//______________________________________________________________________

//Arjun - author of this massive switch statement

  function Sort(sortInt){
  var enteredTitle="ExampleTitle"; //needs to be read off of search bar
  var enteredClass="ExampleClass"; //needs to be read off of search bar

  switch(sortInt){
  case 0: //button changes int to 0 when pressed on website calling this
      SearchByTitle_OrderByPrice(); //pulls up search bar, enter title, order inventory books by price
      break;
  case 1: //button changes int to 1 when pressed on website calling this
      SearchByTitle_OrderByCondition(); //pulls up search bar, enter title, order inventory books by condition
      break;
  case 2: //button changes int to 2 when pressed on website calling this
      SearchByClass_OrderByPrice(); //pulls up search bar, enter class, order inventory books by price
      break;
  case 3: //button changes int to 3 when pressed on website calling this
      SearchByClass_OrderByCondition(); //pulls up search bar, enter class, order inventory books by condition
      break;
  case 4: //button changes int to 4 when pressed on website calling this
      SortAllByPrice(); //sorts all inventory books by price
      break;
  case 5: //button changes int to 5 when pressed on website calling this
      SortAllByCondition(); //sorts all inventory books by conditon
  default:
      break;
  }
}
function SearchByTitle_OrderByPrice() { //Arjun
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT ISBN FROM BookList WHERE Title==enteredTitle", function (err, result) { //uses entered title to find corresponding ISBN
            if (err) throw err;
            var temp = result;
        });
        con.query("SELECT * FROM Inventory WHERE ISBN==temp ORDER BY Price", function (err, result) { //gets all inventory books with ISBN and orders by price
            if (err) throw err;
            return result;
        });
    });
}
function SearchByTitle_OrderByCondition() { //Arjun
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT ISBN FROM BookList WHERE Title==enteredTitle", function (err, result) { //uses entered title to find corresponding ISBN
            if (err) throw err;
            var temp = result;
        });
        con.query("SELECT * FROM Inventory WHERE ISBN==temp ORDER BY Condition", function (err, result) { //gets all inventory books with ISBN and orders by condition
            if (err) throw err;
            return result;
        });
    });
}
function SearchByClass_OrderByPrice(){ //Arjun
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT ISBN FROM BookList WHERE Class==enteredClass", function (err, result) { //uses entered class to find corresponding ISBNs
            if (err) throw err;
            var temp = result;
        });
        con.query("SELECT * FROM Inventory WHERE temp.includes(ISBN) ORDER BY Price", function (err, result) { //gets all inventory books with ISBN and orders by price
            if (err) throw err;
            return result;
        });
    });
}
function SearchByClass_OrderByCondition(){ //Arjun
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT ISBN FROM BookList WHERE Class==enteredClass", function (err, result) { //uses entered class to find corresponding ISBNs
            if (err) throw err;
            var temp = result;
        });
        con.query("SELECT * FROM Inventory WHERE temp.includes(ISBN) ORDER BY Conditon", function (err, result) { //gets all inventory books with ISBN and orders by condition
            if (err) throw err;
            return result;
        });
    });
}
function SortAllByCondition(){//Arjun
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM Inventory ORDER BY Condition", function (err, result) {
        if (err) throw err;
        return result;
    });
});
}
function SortAllByPrice(){ //Evan
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Price", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}




// Delete form tabel
// __________________________________________________________________________________
/**
  * Removes Listing from db using ID
  * Svanik Dani and Kishan Vyas
  * @param {int} ID
  * @return {Null}
*/
function deleteListing(id){
  let sql = `DELETE FROM Inventory WHERE id = x`;
  con.query(sql, id, (error, results, fields) => {
    if (error)
      return console.error(error.message);
  });
}

//Inserts into tabels
//______________________________________________________________

/** Inserts Data into Book List Tabel
  * Svanik Dani
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
  * Svanik Dani
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
  * Svanik Dani
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
  * Svanik Dani
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


// Misc (Other Features)
//__________________________________________________________________________________


// Auto-Email Sender
/** Auto sends-emails
  * Svanik Dani
  * @param {Strings} (myemail, mypass, reciver, subject, emailbody)
  * @return null
*/

var nodemailer = require('nodemailer');

function sendReminder(myemail, mypass, reciver, subject, emailbody){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: myemail,
        pass: mypass
      }
    });
    var mailOptions = {
      from: myemail,
      to: reciver,
      subject: subject,
      text: emailbody
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

// Purge
/** Auto purges listings from sellers who graduated, no args no returns.
  * KP & Ellen
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

// Image Handeling
//____________________________________________________
// Note from Svanik: This code may not work baced on the server and the varible paths may need to be adjusted, perhpas this function could be re-written in a more flexiable way.


/**
  The imagePath and outputImagePath must be changed to the server's path.
*/

const imagePath = 'D:/MyProfile/Documents/Programming/Peddie Book Exchange/SystemMaintenance/TestImage';
const outputImagePath = 'D:/MyProfile/Documents/Programming/Peddie Book Exchange/SystemMaintenance/OutputImage';

/**
  We will need naming convention for pictures which are uploaded and will be stored in the server
  The ImageResize function will get the name(from the convention above) of the picture and resize it
  and save it in the outputImagePath.
  The function will return the Path for the resized picture.
  KP & Ellen
*/
function ImageResize(fileName) {
  sharp(path.join(imagePath, fileName))
    .resize(512,512)
    .toFile(path.join(outputImagePath, fileName))
    .then(() => {
      //fs.writeFileSyne('cat1.jpg', data);
    });
    return path.join(outputImagePath, fileName);
}

