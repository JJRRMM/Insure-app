// Require Sequelize

const Sequelize = require('sequelize');


// // Export the Model
// module.exports = Profile;
module.exports = (Sequelize, DataTypes) => {
   const profile = Sequelize.define('profile', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false },
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
      type: DataTypes.STRING }  
})
   return profile;
}
