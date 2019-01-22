
const mysql = require("mysql");
// Connection info for the ProfileController
const connection = mysql.createConnection({
  host: '192.168.1.27',
  user: 'root',
  password: 'root',
  database: 'insure_app_db'
});
connection.connect();
// export methods to the routes/api.profile.js file  
module.exports = {
    findAll: function(req, res) {      
      connection.query("Select * from automobile", function ( error, results, fields){
      if (error) throw error;
         res.send(results)     
    });    
  },     
    findOne: function(req, res) {
      const id = req.params.id;      
      connection.query("Select * from automobile where id =" + id, function ( error, results, fields){
      if (error) throw error;
         res.send(results)     
    }) 
  },      
    create: function(req, res) {
    // const id = req.params.id;
    const profile_id = req.body.profile_id;
    const make = '"' + req.body.vechile_make + '"'; 
    const model = '"' + req.body.vechile_model + '"';
    const year =  req.body.year;
    const vechile_id = '"' + req.body.vechile_id_number +'"';
    console.log (" In the auto  controller create");
    var query = "insert into automobile (" +
                "profile_id, vechile_make,vechile_model,vechile_year,vechile_id_number)"  + " values " +
                "(" + profile_id + "," + make + "," + model + "," + year + "," + vechile_id + ")"                 
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

  
