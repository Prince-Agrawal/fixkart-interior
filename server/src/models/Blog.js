const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  imagePath: String,
  title: String,
  description: String,
  addedBy: String
}, {
  timestamps: true,
});

module.exports = mongoose.model('Blog', BlogSchema);
