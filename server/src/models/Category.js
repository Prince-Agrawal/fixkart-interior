const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: String,
    categoryDescription: String,
    categorySlug: String,

    categoryAdditionalData: [
        {
            title: {
                type: String,
            },
            description: {
                type: String,
            },
        }
    ],

    imagePaths: {
        type: [String],  // An array of strings to store image paths
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('category', CategorySchema);
