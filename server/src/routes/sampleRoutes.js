const express = require('express');
const SampleController = require('../controllers/sampleController');
const router = express.Router();

router.get('/', SampleController.sample);

module.exports = router;
