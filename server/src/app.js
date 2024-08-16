const express = require('express');
const app = express();

// Import Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);  // Auth routes (e.g., /api/auth/register, /api/auth/login)
app.use('/api/users', userRoutes); // User routes (e.g., /api/users/profile)
app.use('/api', contactRoutes); // Your contact route will be accessible at /api/contact

module.exports = app;

