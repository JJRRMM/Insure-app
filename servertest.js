// Require node modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var mysql      = require('mysql');
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'insure_app_db',
  dialect  : 'mysql'
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables

db.profiles = require('./models/Profile.js')(sequelize, Sequelize);
profiles = require('./models/Profile.js')
//Relations

// module.exports = db;
console.log(" the profiles is list ed below  ///")
console.log(profiles);
const routes = require('./routes');
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
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/skillScoredb");
// console.log("Process Env below");
// console.log(process.env);
// Starting the server, syncing our models ------------------------------------/
var syncOptions = { force: false };

// db.sequelize.sync(syncOptions).then(function() {
//     app.listen(PORT, function() {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });
// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
