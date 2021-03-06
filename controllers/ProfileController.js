// const db = require("../models");
// Profile = require('../models/Profile.js')(sequelize, Sequelize);
// Profile = require('../models/Profile.js');
const mysql = require("mysql");
// Connection info for the ProfileController
const connection = mysql.createConnection({
  // host: '127.0.0.1',
  host: '192.168.1.27',
  user: 'root',
  password: 'root',
  database: 'insure_app_db'  
});
connection.connect();
// export methods to the routes/api.profile.js file  
module.exports = {
    findAll: function(req, res) {      
      connection.query("Select * from profiles", function ( error, results, fields){
      if (error) throw error;
         res.status(200).send(results)     
    });    
  },     
    findOne: function(req, res) {
      const id = req.params.id;    
      console.log(id);  
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

  
