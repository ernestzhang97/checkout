require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");

const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PASS = process.env.DB_PASS
const DB_USER = process.env.DB_USER
// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync() //db.connect
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`)) //db.query
  // .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${DB_NAME};`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`))
  .then(() => db.queryAsync(`USE ${DB_NAME};`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS users(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(10) NOT NULL UNIQUE,
      password VARCHAR(10) NOT NULL,
      address TEXT,
      city TEXT,
      state TEXT,
      zip TEXT,
      phone TEXT,
      credit_card TEXT,
      expiry_date TEXT,
      CVV TEXT,
      billing_zip TEXT,
      session TEXT
      );`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;

