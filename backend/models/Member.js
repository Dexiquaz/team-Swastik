const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  roll: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  degree: {
    type: String,
    required: true,
    trim: true
  },
  project: {
    type: String,
    trim: true
  },
  hobbies: {
    type: [String],
    default: []
  },
  certificate: {
    type: String,
    trim: true
  },
  internship: {
    type: String,
    trim: true
  },
  aboutYourAim: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);
