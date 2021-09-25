const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Edhot111",
  database: "db_kantor",
  port: 3306,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return console.error("Error:", err.message);
  }
  console.log("Database MySQL Connected");
});

module.exports = { db };
