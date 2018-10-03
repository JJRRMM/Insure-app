// Require node modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mysql = require("mysql");
const Sequelize = require("sequelize");
const sequelize = new Sequelize('insure_app_db', 'root','root',{
    host     : 'localhost',
    dialect  : 'mysql'
  });
// var db = require("./models");
const connection = mysql.createConnection({
    host: 'locahost',
    user: 'root',
    password: 'root',
    database: 'insure_app_db'
});

const routes = require("./routes");

// const routes = require('./routes');
const PORT = process.env.PORT || 3001;
var app = express();


// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
// var db = require("./models");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/skillScoredb");

var syncOptions = { force: false };


// Start the API server
// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//       console.log('Express listening on port:', PORT);
//     });
//   });
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
