const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { createMulterStorage } = require('../utils/fileUpload');
const authMiddleware = require('../middlewares/authMiddleware');


// Route to get all categories (protected)
router.get('/categories', categoryController.getAllCategories)


// Route for category creation (protected)
router.post('/category', authMiddleware, createMulterStorage('public/upload/categories').array('imageFiles'), categoryController.createCategory);


// Route to update a category by ID (protected)
router.put('/categories/:id', authMiddleware, createMulterStorage('public/upload/categories').array('files'), categoryController.updateCategory);


// Route to delete a category by ID (protected)
router.delete('/categories/:id', authMiddleware, categoryController.deleteCategory);

// Route to get a single category by ID (protected)
router.get('/categories/:id', authMiddleware, categoryController.getCategoryById);

module.exports = router;