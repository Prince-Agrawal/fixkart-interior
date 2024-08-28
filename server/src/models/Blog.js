const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  imagePath: String,
  title: String,
  description: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
