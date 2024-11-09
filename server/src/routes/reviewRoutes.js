const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { createMulterStorage } = require('../utils/fileUpload');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for creating a review (protected)
router.post('/review', authMiddleware, createMulterStorage('public/upload/reviews').single('file'), reviewController.createReview);

// Route to get all reviews (protected)
router.get('/reviews', reviewController.getAllReviews);

// Route to delete a review by ID (protected)
router.delete('/reviews/:id', authMiddleware, reviewController.deleteReview);

// Route to get a single review by ID (protected)
router.get('/reviews/:id', authMiddleware, reviewController.getReviewById);

// Route to update a review by ID (protected)
router.put('/reviews/:id', authMiddleware, createMulterStorage('public/upload/reviews').single('file'), reviewController.updateReview);

module.exports = router;
