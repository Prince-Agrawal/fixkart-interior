const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to handle saving contact details
router.post('/contact', contactController.saveContactDetails);

module.exports = router;
