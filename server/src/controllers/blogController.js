

// User registration
exports.createBlog = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log('req.file', req.file)
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
