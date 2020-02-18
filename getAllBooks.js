//Evan Glas
//Returns all books as listed in the inventory
//(c) 2020 Glas Industries

var mysql = require('mysql');

getListingsByUser()

function getListingsByUser(email) {
    var con = mysql.createConnection({
        host: "remotemysql.com",
        user: "7fY7FODdcI",
        password: "8Nq9eWvZDS",
        database: "7fY7FODdcI",
        port: 3306
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory", function (err, result) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}