// const db = require("../models");
// Profile = require('../models/Profile.js')(sequelize, Sequelize);
Profile = require('../models/Profile.js');
const mysql = require("mysql");
// Defining methods for the ProfileController
console.log(" Breaker Break Break");
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'insure_app_db'
});
connection.connect();
module.exports = {
    findAll: function(req, res) {      
      connection.query("Select * from profiles", function ( error, results, fields){
      if (error) throw error;
         res.send(results)     
    });    
  },     
    findOne: function(req, res) {
      const id = req.params.id;      
      connection.query("Select * from profiles where id =" + id, function ( error, results, fields){
      if (error) throw error;
         res.send(results)     
    }) 
  },      
    create: function(req, res) {
    // const id = req.params.id;
    const firstname = req.body.firstname;
    const first = '"' + firstname + '"'; 
    const lastname = '"' + req.body.lastname + '"';
    const adrr_line1 = '"' + req.body.adrr_line1 + '"';
    const city = '"' + req.body.city +'"';
    const State = '"' + req.body.State + '"';
    const zip = '"' + req.body.zip + '"';
    console.log (" In the profile controller create");
    var query = "insert into profiles (" +
                "firstname, lastname,adrr_line1,city,State,zip)"  + " values " +
                "( " + first + "," + lastname + "," + adrr_line1 + "," + city + "," + State + "," + zip + ")"                 
    console.log(query);
    // connection.query("insert into profiles (id,firstname) values (" + id +  ",`" + firstname +"`)")
    connection.query(query)
    // if (error) throw error;
    //   res.send("Success")
  
},
  update: function(req, res) {
  const id = req.body.id;
  const firstname = req.body.firstname;
  const first = '"' + firstname + '"'; 
  const lastname = '"' + req.body.lastname + '"';
  const adrr_line1 = '"' + req.body.adrr_line1 + '"';
  const city = '"' + req.body.city + '"';
  const State = '"' + req.body.State + '"';
  const zip = '"' + req.body.zip + '"';
  console.log (first);
  var query = "update profiles " +
              "set firstname = " + first + "," +
              "lastname = " + lastname + "," + 
              "adrr_line1 = " + adrr_line1 + "," + 
              "city = " + city + "," +
              "State = " + State + "," +
              "zip = " + zip + " where id = " + id
  console.log(query);
  // connection.query("insert into profiles (id,firstname) values (" + id +  ",`" + firstname +"`)")
  connection.query(query)
  // if (error) throw error;
  //   res.send("Success")

},
    remove: function(req, res) {
        const id = req.params.id; 
        console.log(req.params);
        var query = "Delete from profiles " +
                    "where id = " + id
        console.log(query); 
        connection.query(query);     
     }
 };

  // module.exports = {
  //   findAll: function(req, res) {
  //    Profile
  //       .findAll({})
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   create: function(req, res) {
  //     db.Profile
  //       .create(req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Profile
  //       .findBySkill({ profile: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
  // };
   
