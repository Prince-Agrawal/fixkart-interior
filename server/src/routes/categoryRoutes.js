const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { createMulterStorage } = require('../utils/fileUpload');
const authMiddleware = require('../middlewares/authMiddleware');


// Route to get all categories (protected)
router.get('/categories', authMiddleware, categoryController.getAllCategories)


module.exports = router;