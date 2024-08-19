// src/pages/Contact/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { faContactBook, faMailBulk, faMessage, faUserAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contacts', formData);
      setResponseMessage(response.data.message);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setResponseMessage('Error sending message');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
        <h2><FontAwesomeIcon className='icon' icon={faContactBook}/>Contact Me</h2>
          <div className="form-group">
            <label htmlFor="name"><FontAwesomeIcon className='icon' icon={faUserAlt}/>Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><FontAwesomeIcon className='icon' icon={faMailBulk}/>Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message"><FontAwesomeIcon className='icon' icon={faMessage}/>Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required ></textarea>
          </div>
          <button type="submit" className="btn"><FontAwesomeIcon className='icon' icon={faMessage}/>Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
        <div className="contact-info">
          <p>You can also reach me at:</p>
          <p><FontAwesomeIcon className='icon' icon={faMailBulk}/><a href="mailto:your-email@example.com">manishyelam12e@gmail.com</a></p>
          <div className="social-links">
            <a href="https://github.com/ManishYelam/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/manish-yelam-a6b649233/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;







