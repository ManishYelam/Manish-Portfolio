const Admin = require('../models/Admin');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Function to generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Function to send verification email
const sendVerificationEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'manishyelam@gmail.com',
    subject: 'Welcome to @UnityCircle$ManishYelam! - Verify Your Email Address',
    text: `
Dear Mr. Manish Yelam,

Welcome to @UnityCircle$ManishYelam! We are thrilled to have you join our team.

Thank you for registering as an admin. To complete your registration and gain admin privileges, please verify your email address using the OTP provided below:

Your Email: ${email}
Your OTP: ${otp}

Please enter this OTP on the verification page to complete your registration. Once verified, you will have full access to admin functionalities.
If you did not request this registration, please ignore this email or contact our support team for assistance.

We are excited to have you on board!

Best regards,
The @UnityCircle$ManishYelam Team

Contact Us: manishyelam@gmail.com
Website: .....................`
  };
  await transporter.sendMail(mailOptions);
};

// Register Admin
exports.registerAdmin = async (req, res) => {
  try {
    const { name, birthdate, contact, password, address, aadharNumber, email } = req.body;

    const emailVerificationOTP = generateOTP();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      birthdate,
      contact,
      password: hashedPassword,
      address,
      aadharNumber,
      email,
      emailVerificationOTP
    });

    await newAdmin.save();
    await sendVerificationEmail(email, emailVerificationOTP);

    res.status(201).json({ message: 'Admin registered successfully. Please verify your email.' });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: 'Error registering admin. Please try again later.' });
  }
};

// Verify Email OTP
exports.verifyEmailOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const admin = await Admin.findOne({ email });
    console.log(Admin);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    if (admin.emailVerificationOTP !== otp) {
      return res.status(400).json({ message: 'Invalid OTP.' });
    }
    
    admin.isEmailVerified = true;
    await admin.save();
    res.status(200).json({ message: 'Email verified successfully.' });
  } 
  catch (error) {
    console.error('Error verifying email OTP:', error);
    res.status(500).json({ message: 'Error verifying email OTP. Please try again later.' });
  }
};



// Login Admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    if (!admin.isEmailVerified) {
      return res.status(403).json({ message: 'Email not verified.' });
    }

    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Error logging in admin. Please try again later.' });
  }
};


exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins', error });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Admin.findByIdAndDelete(id);
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin', error });
  }
};