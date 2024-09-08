const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { createMulterStorage } = require('../utils/fileUpload');
const authMiddleware = require('../middlewares/authMiddleware');


// Route to get all categories (protected)
router.get('/categories', authMiddleware, categoryController.getAllCategories)


// Route for blog creation (protected)
router.post('/category', authMiddleware, createMulterStorage('public/upload/categories').array('imageFiles'), categoryController.createCategory);


module.exports = router;