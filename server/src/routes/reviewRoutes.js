const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Import Multer helper
const { createMulterStorage } = require('../utils/fileUpload');

// Route for user registration
router.post('/review', createMulterStorage('public/upload/reviews').single('file') , reviewController.createReview);


module.exports = router;
