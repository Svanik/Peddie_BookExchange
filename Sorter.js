//Arjun
var sortInt=0;// there should be the filters on the website assigned to an int and when pressed a different sort will be called.
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "7fY7FODdcI",
    password: "8Nq9eWvZDS",
    database: "7fY7FODdcI",
    port: 3306
});
switch(sortInt){
case 0:
    SortByClass();
    break;
case 1: 
    SortByTitle();
    break;
case 2:
    SortByPrice();
    break;
case 3: 
    SortByCondition();
    break;
default:
    break;
}
function SortByTitle(title) { // have to finish linking to book list
    con.connect(function (err) {
        if (err) throw err;

        con.query("SELECT * FROM Inventory ORDER BY Title", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}
function SortByClass(){ // have to finish linking to book list
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Class", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}
function SortByCondition(){
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM Inventory ORDER BY Condition", function (err, result) {
        if (err) throw err;
        return result;
    });
});
}
function SortByPrice(){ //Evan
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Price", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}