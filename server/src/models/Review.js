const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  imagePath: String,
  reviewData: String,
  reviewerName: String,
  reviewerLocation: String
}, {
  timestamps: true,
});

module.exports = mongoose.model('Review', ReviewSchema);
