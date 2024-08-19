const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');
const resumeRoutes = require('./routes/resumeRoutes');
const profileRoutes = require('./routes/profileRoutes')
const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoutes')

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/projects', require('./routes/projects'));
app.use('/uploads', express.static('uploads'));
app.use('/api/resume', resumeRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/admin', adminRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MongoDB connection
// const dbURI = process.env.MONGODB_URI;
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected.........'))
//   .catch(err => console.log(err));

//.............................................................................................................
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// // Create a transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Define mail options
// const mailOptions = {
//   from: process.env.EMAIL_USER,
//   to: 'manishyelam12e@gmail.com', // Replace with the recipient's email address
//   subject: 'Test Email',
//   text: `This is a test email sent from Nodemailer. Server is running at http://localhost:${PORT}`,
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log('Error sending email:', error);
//   }
//   console.log('Email sent:', info.response);
// });
//....................................................................................................














