const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Import Multer helper
const { createMulterStorage } = require('../utils/fileUpload');

// Route for user registration
router.post('/blog', createMulterStorage('public/upload/blogs').single('file') , blogController.createBlog);


module.exports = router;
