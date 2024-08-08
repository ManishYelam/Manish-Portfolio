import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faMailBulk, faSignInAlt, faUserAlt} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      setMessage(response.data.message);

      // Store the token in local storage or context/state
      localStorage.setItem('token', response.data.token);
      login(); 
    } 
    catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2><FontAwesomeIcon className='icon' icon={faUserAlt} />Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label><FontAwesomeIcon className='icon' icon={faMailBulk} />Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required />
        </div>
        <div>
          <label><FontAwesomeIcon className='icon' icon={faKey}/>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
        </div>
        <span><a href="/forgot-password"><FontAwesomeIcon className='icon' icon={faKey}/>Forgot Password</a></span>
        <button type="submit"><FontAwesomeIcon className='icon' icon={faSignInAlt} />Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
