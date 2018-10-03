// Require Sequelize

// const Sequelize = require('sequelize');
// // Export the Model
// module.exports = Profile;
module.exports = (sequelize, DataTypes) => {
   const Profile = sequelize.define('profile', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false },
      adrr_line1: {
        type: DataTypes.STRING },
      adrr_state: {
          type: DataTypes.STRING },
      zip:  {
        type: DataTypes.STRING },
      createdAt:{
         type: DataTypes.DATE } ,
      updatedAt:{ 
          type: DataTypes.DATE },  
  });
  return Profile;
  }
  