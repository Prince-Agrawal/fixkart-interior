const Review = require('../models/Review'); // Import the Review model

// Create Review Controller
exports.createReview = async (req, res) => {
  const { reviewData, reviewerName, reviewerLocation } = req.body;

  try {
    // Validate required fields
    if (!reviewData || !reviewerName || !reviewerLocation) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Validate file upload
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required.' });
    }

    // Create a new review object
    const newReview = new Review({
      reviewData,
      reviewerName,
      reviewerLocation,
      imagePath: req.file.path, // Store the file path of the uploaded image
    });

    // Save the review to the database
    await newReview.save();

    // Send a success response
    res.status(201).json({ message: 'Review created successfully.', review: newReview });
  } catch (err) {
    console.error('Error creating review:', err.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
