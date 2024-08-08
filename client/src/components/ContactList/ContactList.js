import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook } from '@fortawesome/free-solid-svg-icons';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } 
    catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="contact-list-container">
      <h2><FontAwesomeIcon className='icon' icon={faContactBook}/>Contact List</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(contact._id)} className="btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
