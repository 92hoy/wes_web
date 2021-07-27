var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "wes_studio",
});

module.exports = db;
