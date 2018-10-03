// Require Mongoose
const mongoose = require('mongoose');

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Resume Schema
const ResumeSchema = new Schema({
  
  resumedoc: {
    type: String,
    required: true
  },


});

// Create the Resume model with Mongoose
const Resume = mongoose.model('Resume', ResumeSchema);

// Export the Model
module.exports = Resume;