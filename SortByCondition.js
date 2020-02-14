
//Arjun
//Returns results element for each listing in the inventory table

function SortByCondition() {
    //Connects to test database
    var con = mysql.createConnection({
        host: "remotemysql.com",
        user: "7fY7FODdcI",
        password: "8Nq9eWvZDS",
        database: "7fY7FODdcI",
        port: 3306
    });

    //Returns result object of books sorted by condition (ascending order)
    // 1=Excellent, 2=Good, 3=Acceptable, 4=Poor
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM Inventory ORDER BY Condition", function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}