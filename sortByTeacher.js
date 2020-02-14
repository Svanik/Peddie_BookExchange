//Kishan Vyas

var mysql = require('mysql');

//Returns results element for each listing in the inventory table

function SORTBYTEACHER() {
    //Connect to database
    var con = mysql.createConnection({
        host: "remotemysql.com",
        user: "7fY7FODdcI",
        password: "8Nq9eWvZDS",
        database: "7fY7FODdcI",
        port: 3306
    });

    //Returns result object of books sorted by price (ascending order)
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM Book List ORDER BY Teacher", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}