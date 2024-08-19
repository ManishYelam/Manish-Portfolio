const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  birthdate: { 
    type: Date, 
    required: true 
  },
  contact: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  aadharNumber: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  emailVerificationOTP: { 
    type: String, 
    required: true 
  },
  isEmailVerified: { 
    type: Boolean, 
    default: false 
  }
});

module.exports = mongoose.model('Admin', adminSchema);
