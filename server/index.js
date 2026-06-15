require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const { v7: uuid } = require("uuid");

//variables
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

//creating database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: true,
});

db.connect((error) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Connected to database successfully!`);
  }
});

// initial get
app.get("/", (req, res) => {
  res.send(`From backend.`);
});

//crud operation
app.get("/customer", (req, res) => {
  const sql =
    "SELECT  bin_to_uuid(customer_id)  as id, date_of_birth as DOB, email,first_name as f_name, last_name as l_name, phone FROM customer;";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ Error: err });
    } else {
      res.status(200).json({ Message: result });
    }
  });
});
app.listen(port, () => {
  console.log(`App is listening to the port: ${port}`);
});
