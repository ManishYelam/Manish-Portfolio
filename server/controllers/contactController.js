const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      message
    });
    await newContact.save();
    
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
    console.log(contacts);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  submitContactForm, 
  getContacts, 
  deleteContact 
}
