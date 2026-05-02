const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: Number,
  department: String,
  marks: Number
});

module.exports = mongoose.model('Student', studentSchema);
