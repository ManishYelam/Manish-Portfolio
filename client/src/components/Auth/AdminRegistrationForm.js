import React, { useState } from 'react';
import axios from 'axios';
import './AdminRegistrationForm.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faContactBook, faIdCardAlt, faKey, faLocation, faMailBulk, faUserAlt, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const AdminRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    contact: '',
    password: '',
    address: '',
    aadharNumber: '',
    email: '',
    otp: ''
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      try {
        const response = await axios.post('http://localhost:5000/api/admin/register', formData);
        console.log(response.data);
        setMessage(response.data.message)
        setStep(2);
      } catch (error) {
        console.error('Error registering admin:', error);
        setMessage(error.response?.data?.message || 'Error registering admin. Please try again.');
      }
    } else if (step === 2) {
      try {
        const response = await axios.post('http://localhost:5000/api/admin/verify-email', { email: formData.email, otp: formData.otp });
        console.log(response.data);
        console.log('verified');
        setMessage(response.data.message)
      } catch (error) {
        console.error('Error verifying OTP:', error);
        setMessage(error.response?.data?.message || 'Error verifying OTP. Please try again.');
      }
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="admin-registration-form">
      {step === 1 ? (
        <>
          <h2><FontAwesomeIcon className='icon' icon={faUserPlus}/>Register Admin</h2>
          <label><FontAwesomeIcon className='icon' icon={faUserAlt}/>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="input-field"/>
          <label><FontAwesomeIcon className='icon' icon={faCalendarAlt}/>DOB</label>
          <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} placeholder="Birthdate" required className="input-field"/>
          <label><FontAwesomeIcon className='icon' icon={faContactBook}/>Contact</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required className="input-field"/>
          <label><FontAwesomeIcon className='icon' icon={faKey}/>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="input-field"/>
          <label><FontAwesomeIcon className='icon' icon={faLocation}/>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required className="input-field"/>
          <label><FontAwesomeIcon className='icon' icon={faIdCardAlt}/>Adhar Number</label>
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Aadhar Number" required className="input-field"/>
          <label><FontAwesomeIcon className='icon' icon={faMailBulk}/>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="input-field"/>
          <button type="submit" className="submit-button"><FontAwesomeIcon className='icon' icon={faUserPlus}/>Register</button>
        </>
      ) : (
        <>
          <label><FontAwesomeIcon className='icon' icon={faUserCheck}/>Enter OTP </label>
          <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="Enter OTP" required className="input-field"/>
          <button type="submit" className="submit-button"><FontAwesomeIcon className='icon' icon={faUserCheck}/>Verify OTP</button>
          {message && <p>{message}</p>}
        </>
      )}
    </form>
    </>
  );
};

export default AdminRegistrationForm;
