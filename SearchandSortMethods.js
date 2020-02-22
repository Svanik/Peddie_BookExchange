//Arjun
var sortInt=0;// there should be the filters on the website assigned to an int and when pressed a different search and sort will be called.
var enteredTitle="ExampleTitle"; //needs to be read off of search bar
var enteredClass="ExampleClass"; //needs to be read off of search bar
var mysql = require('mysql');
var con = mysql.createConnection({
        host: "us-cdbr-iron-east-04.cleardb.net",
        user: "bd1c6a7c6db8bc",
        password: "8ca72168",
        database: "heroku_af9a5e472645ed1",
        port:3306
      
});
switch(sortInt){ //Arjun 
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
    break;
case 6:
    SortAllByDateandTime();
    break;
default:
    break;
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
function SortAllByPrice(){ //Evan
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Price", function (err, result) { //orders all books in inventory by price
            if (err) throw err;
            return result;
        });
    });
}
function SortAllByCondition(){//Arjun 
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Condition", function (err, result) { // orders all books in inventory by condition
            if (err) throw err;
            return result;
        });
    });
function SortAllByDateandTime(){//Arjun 
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY DatePosted, TimePosted DESC", function (err, result) { // orders all books by newest to oldest in terms of date and time posted
            if (err) throw err;
            return result;
        });
    });
}
}
