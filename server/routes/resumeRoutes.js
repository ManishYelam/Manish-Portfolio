const express = require('express');
const router = express.Router();
const { getResume, uploadResume } = require('../controllers/resumeController');

router.get('/', getResume);
router.post('/upload', uploadResume);

module.exports = router;
