const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { createMulterStorage } = require('../utils/fileUpload');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for blog creation (protected)
router.post('/blog', authMiddleware, createMulterStorage('public/upload/blogs').single('file'), blogController.createBlog);

// Route to get all blogs (protected)
router.get('/blogs', blogController.getAllBlogs);

// Route to delete a blog by ID (protected)
router.delete('/blogs/:id', authMiddleware, blogController.deleteBlog);

// Route to get a single blog by ID (protected)
router.get('/blogs/:id', blogController.getBlogById);

// Route to update a blog by ID (protected)
router.put('/blogs/:id', authMiddleware, createMulterStorage('public/upload/blogs').single('file'), blogController.updateBlog);

module.exports = router;
