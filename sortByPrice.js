
//Arjun 
var mysql = require('mysql');

//Returns results element for each listing in the inventory table

function SortByPrice() {
    //Connects to test database
    var con = mysql.createConnection({
        host: "remotemysql.com",
        user: "7fY7FODdcI",
        password: "8Nq9eWvZDS",
        database: "7fY7FODdcI",
        port: 3306
    });

    //Returns result object of books sorted by price low to high
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Price", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}