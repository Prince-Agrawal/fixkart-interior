const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.use('/public', express.static('public'))

// Import Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const sampleRoutes = require('./routes/sampleRoutes');



// Use routes
app.use('/', sampleRoutes); // Your review route will be accessible at /api/review
app.use('/api/auth', authRoutes);  // Auth routes (e.g., /api/auth/register, /api/auth/login)
app.use('/api/users', userRoutes); // User routes (e.g., /api/users/profile)
app.use('/api', contactRoutes); // Your contact route will be accessible at /api/contact
app.use('/api', blogRoutes); // Your blog route will be accessible at /api/blog
app.use('/api', categoryRoutes); // Your blog route will be accessible at /api/blog
app.use('/api', reviewRoutes); // Your review route will be accessible at /api/review


module.exports = app;

