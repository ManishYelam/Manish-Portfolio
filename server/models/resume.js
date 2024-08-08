const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Resume', resumeSchema);
