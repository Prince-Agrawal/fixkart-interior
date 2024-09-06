const Review = require("../models/Review");
const path = require('path');
const fs = require('fs');

// Create a review
exports.createReview = async (req, res) => {
  const { reviewData, reviewerName, reviewerLocation } = req.body;

  try {
    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Get the uploaded file's path
    const imagePath = req.file.path;

    // Create a new review document
    const newReview = new Review({
      reviewData,
      reviewerName,
      reviewerLocation,
      imagePath,
    });

    // Save the review to the database
    await newReview.save();

    // Send a success response
    res.status(201).send(`Review created successfully with ID: ${newReview._id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find(); // Fetch all reviews from the database
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err.message);
    res.status(500).send('Server error');
  }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).send('Review not found');
    }

    // Delete the review image if it exists
    if (review.imagePath) {
      const imagePath = path.join(__dirname, '..', review.imagePath);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    console.error('Error deleting review:', err.message);
    res.status(500).send('Server error');
  }
};

// Get a review by ID
exports.getReviewById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the review by its ID
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(review); // Send the review data as a response
  } catch (error) {
    console.error('Error fetching review by ID:', error);
    res.status(500).json({ message: 'Server error while fetching review' });
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { reviewData, reviewerName, reviewerLocation } = req.body;

  try {
    // Find the existing review by ID
    const existingReview = await Review.findById(id);
    if (!existingReview) {
      return res.status(404).send('Review not found.');
    }

    // Handle file upload
    let imagePath = existingReview.imagePath; // Default to existing image path
    if (req.file) {
      // Delete the old image file if it exists
      if (imagePath) {
        const oldImagePath = path.join(__dirname, '..', imagePath);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Get the new file's path
      imagePath = req.file.path;
    }

    // Update the review document
    existingReview.reviewData = reviewData;
    existingReview.reviewerName = reviewerName;
    existingReview.reviewerLocation = reviewerLocation;
    existingReview.imagePath = imagePath;

    // Save the updated review to the database
    await existingReview.save();

    // Send a success response
    res.status(200).send(`Review updated successfully with ID: ${existingReview._id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
