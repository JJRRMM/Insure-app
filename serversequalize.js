// Require node modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var mysql      = require('mysql');
const Sequelize = require("sequelize");
var sequelize = new Sequelize('insure_app_db', 'root','root',{
  host     : 'localhost',
  dialect  : 'mysql'
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established');
    })
    .catch(err => {
        console.log('Unable to connect to the database', err); 
    });
 
var db = require("./models");
const profile = sequelize.define('profile', {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false, 
      primaryKey: true} ,
    firstname: {
      type: Sequelize.STRING,
      allowNull: false },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false },
    adrr_line1: {
      type: Sequelize.STRING },
    adrr_state: {
        type: Sequelize.STRING },
    zip:  {
      type: Sequelize.STRING },
    createdAt:{
       type: Sequelize.DATE } ,
    updatedAt:{ 
        type: Sequelize.DATE },  
});
console.log("  The profile is below : ")
console.log(profile);
console.log(" the profile is above ")
profile.findAll().then(profile => {
    console.log(profile)
})
// const routes = require("./routes");
