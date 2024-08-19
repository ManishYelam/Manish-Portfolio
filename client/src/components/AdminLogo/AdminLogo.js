// src/components/AdminLogoDropdown.js
import React, { useState, useRef, useEffect } from 'react';
import './AdminLogo.css';
import ProfileViewer from '../Profile/profileViewer';
import { useAuth } from '../context/AuthContext';
import AuthStatus from '../Auth/AuthStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faUser, faFilePdf, faUserShield, faAddressBook, faProjectDiagram, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminLogoDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="admin-logo-dropdown" ref={dropdownRef}>
            <div className="admin-logo" onClick={handleToggleDropdown}>
                <ProfileViewer />
            </div>
            {dropdownOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li><h3><FontAwesomeIcon className='icon' icon={faUser}/>Welcome, Admin!</h3></li>
                        <li><AuthStatus /></li>
                        {isAuthenticated ? (
                            <>
                                <li><a href="/admin-login"><FontAwesomeIcon className='icon' icon={faSignInAlt} /> Login</a></li>
                                <li><a href="/profile-register"><FontAwesomeIcon className='icon' icon={faUserPlus} /> Register</a></li>
                                <li><a href="/profile-upload"><FontAwesomeIcon className='icon' icon={faUser} /> Profile</a></li>
                                <li><a href="/resume-upload"><FontAwesomeIcon className='icon' icon={faFilePdf} /> Resume</a></li>
                                <li><a href="/admin-list"><FontAwesomeIcon className='icon' icon={faUserShield} /> Admin</a></li>
                                <li><a href="/storage"><FontAwesomeIcon className='icon' icon={faAddressBook} /> Contacts</a></li>
                                <li><a href="/projects"><FontAwesomeIcon className='icon' icon={faProjectDiagram} /> Projects</a></li>
                                <li><button onClick={logout}><FontAwesomeIcon className='icon' icon={faSignOutAlt} /> Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><a href="/admin-login"><FontAwesomeIcon className='icon' icon={faSignInAlt} /> Login</a></li>
                                <li><a href="/profile-register"><FontAwesomeIcon className='icon' icon={faUserPlus} /> Register</a></li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AdminLogoDropdown;
