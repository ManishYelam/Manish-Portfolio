const express = require('express');
const router = express.Router();
const { getProfilePicture, uploadProfilePicture } = require('../controllers/profileController');

router.get('/', getProfilePicture);
router.post('/upload', uploadProfilePicture);

module.exports = router;
