// Set up MySQL connection.
var mysql = require("mysql");

// commenting out lines 5-15 during initial testing
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
    // host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // user: 'koed0d17foxpgcix',
    // password: 'bzujtayvuzgqt6bk',
    // database: 'vy3jxqnv9xzs8da4'
  })
};
  

//creating a local database connection for testing
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
