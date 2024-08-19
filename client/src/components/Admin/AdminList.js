import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/admins');
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/admins/${id}`);
      setAdmins(admins.filter(admin => admin._id !== id));
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  return (
    <div className="admin-list-container">
      <h2><FontAwesomeIcon className='icon' icon={faUserShield}/>Admin List</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Aadhar Number</th>
            <th>Email</th>
            <th>Email Verified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin._id}>
              <td>{admin.name}</td>
              <td>{new Date(admin.birthdate).toLocaleDateString()}</td>
              <td>{admin.contact}</td>
              <td>{admin.address}</td>
              <td>{admin.aadharNumber}</td>
              <td>{admin.email}</td>
              <td>{admin.isEmailVerified ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => deleteAdmin(admin._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
