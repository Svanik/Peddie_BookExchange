/**
 * Deletes a book in the database by its id
 * @param {int} id
 * @return {null}
 */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "7fY7FODdcI",
  password: "8Nq9eWvZDS",
  database: "7fY7FODdcI"
});

function DELETELISTING(id) {
  let connection = mysql.createConnection(config);

  // DELETE statment
  let sql = `DELETE FROM todos WHERE id = ` + id;

  // delete a row with id 1
  connection.query(sql, 1, (error, results, fields) => {
    if (error)
      return console.error(error.message);

    console.log('Deleted Row(s):', results.affectedRows);
  });

  connection.end();
}
