const Blog = require("../models/Blog");


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
