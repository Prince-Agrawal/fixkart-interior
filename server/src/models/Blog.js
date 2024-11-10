const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  h2: { type: String, default: '' },
  h3: { type: String, default: '' },
  paragraph: { type: String, default: '' },
  image: { type: String, default: '' },
});


const BlogSchema = new mongoose.Schema({
  imagePath: String,
  title: String,
  description: String,
  addedBy: String,
  sections: { type: [SectionSchema], default: [] }, // Array of sections
}, {
  timestamps: true,
});

module.exports = mongoose.model('Blog', BlogSchema);
