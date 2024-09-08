const Blog = require("../models/Blog");
const path = require('path')
const fs = require('fs')


// Blog creation
exports.createBlog = async (req, res) => {
  const { title, description, addedBy } = req.body;

  try {
    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Get the uploaded file's path
    const imagePath = req.file.path;

    // Create a new blog document
    const newBlog = new Blog({
      title,
      description,
      addedBy,
      imagePath,
    });

    // Save the blog to the database
    await newBlog.save();

    // Send a success response
    res.status(201).send(`Blog created successfully with ID: ${newBlog._id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs from the database
    res.json(blogs);
  } catch (err) {
    console.error('Error fetching blogs:', err.message);
    res.status(500).send('Server error');
  }
};

// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog:', err.message);
    res.status(500).send('Server error');
  }
};

// Controller function to get a blog by ID
exports.getBlogById = async (req, res) => {
  const { id } = req.params; // Extract the blog ID from the request parameters

  try {
      // Find the blog by its ID
      const blog = await Blog.findById(id);

      if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
      }

      res.json(blog); // Send the blog data as a response
  } catch (error) {
      console.error('Error fetching blog by ID:', error);
      res.status(500).json({ message: 'Server error while fetching blog' });
  }
};

// Blog update
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description, addedBy } = req.body;

  try {
    // Find the existing blog by ID
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return res.status(404).send('Blog not found.');
    }

    // Handle file upload
    let imagePath = existingBlog.imagePath; // Default to existing image path
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

    // Update the blog document
    existingBlog.title = title;
    existingBlog.description = description;
    existingBlog.addedBy = addedBy;
    existingBlog.imagePath = imagePath;

    // Save the updated blog to the database
    await existingBlog.save();

    // Send a success response
    res.status(200).send(`Blog updated successfully with ID: ${existingBlog._id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};