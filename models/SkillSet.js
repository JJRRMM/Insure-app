// Require Mongoose
const mongoose = require('mongoose');

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Skillset Schema
const SkillSetSchema = new Schema({
  
  skill: {
    type: String,
    required: true
  },


});

// Create the SkillSet model with Mongoose
const SkillSet = mongoose.model('SkillSet', SkillSetSchema);

// Export the Model
module.exports = SkillSet;