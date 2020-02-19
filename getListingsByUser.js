/**
 * Returns all of the listings of a given user as designated by their email
 * @param {String} email Seller email
 * @return {json} result Default result variable from SQL database querey
 * (c) Glas Industries
 */

var mysql = require('mysql');


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
        con.query("SELECT * FROM Inventory WHERE selleremail = " + mysql.escape(email), function (err, result) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
}