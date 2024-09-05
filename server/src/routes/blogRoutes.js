const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Import Multer helper
const { createMulterStorage } = require('../utils/fileUpload');

// Route for user registration
router.post('/blog', createMulterStorage('public/upload/blogs').single('file'), blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs); // Define the route to get all blogs
router.delete('/blogs/:id', blogController.deleteBlog); // Route to delete a blog by ID
router.get('/blogs/:id', blogController.getBlogById); // Route to get a single blog by ID


router.put('/blogs/:id', createMulterStorage('public/upload/blogs').single('file'), blogController.updateBlog); // Route to update a blog by ID


module.exports = router;
