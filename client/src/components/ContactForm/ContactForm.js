// client/src/components/ContactForm/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Implement form submission logic (e.g., send data to backend)
    console.log(formData);
    // Clear form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={message} onChange={handleChange} required ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
