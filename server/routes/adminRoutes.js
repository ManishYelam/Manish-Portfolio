const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/register', adminController.registerAdmin);
router.post('/verify-email', adminController.verifyEmailOTP);
router.post('/login', adminController.loginAdmin);

router.get('/admins', adminController.getAdmins);
router.delete('/admins/:id', adminController.deleteAdmin);

module.exports = router;
