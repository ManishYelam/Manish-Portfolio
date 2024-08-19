import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/profile-upload">Profile</Link></li>
          <li><Link to="/resume-upload">Resume</Link></li>
          <li><Link to="/admin-list">Admin</Link></li>
          <li><Link to="/storage">Manage Contacts</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
