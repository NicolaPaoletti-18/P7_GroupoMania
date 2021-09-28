const express = require("express");
const app = express();
const mysql = require('mysql')

const bodyParser = require('body-parser'); 



// Create connexion
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'IlmioaccountMySQL!!97',
  database : "db_groupomania"
});

// Connect
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log("MySQL Connected ...");
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json())

const userRoutes = require('./routes/user')
//const postRoutes = require('./routes/post');

app.use('/api/auth', userRoutes);
//app.use('/api/post', postRoutes)

module.exports = db;
module.exports = app;