const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to handle saving contact details
router.post('/contact', contactController.saveContactDetails);

// Route to handle saving contact details
router.get('/contacts', contactController.getContactDetails);

module.exports = router;
