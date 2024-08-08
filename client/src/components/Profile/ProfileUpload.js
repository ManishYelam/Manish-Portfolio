import React, { useState, useEffect } from 'react';
import { getProfilePicture, uploadProfilePicture } from '../../services/profileService';
import './ProfileUpload.css';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileUploader = () => {
  const [profile, setProfile] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const profile = await getProfilePicture();
        setProfile(profile);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfilePicture();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('profilePicture', file);
    try {
      const uploadedProfile = await uploadProfilePicture(formData);
      setProfile(uploadedProfile);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-uploader">
      <h2><FontAwesomeIcon className='icon' icon={faUserAlt}/>Profile Picture Upload</h2>
      {profile ? (
        <div>
          <div className="profile-image-container">
            <img src={`http://localhost:5000/${profile.filepath}`} alt="Profile" className="profile-image" />
          </div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Update Profile Picture</button>
        </div>
      ) : (
        <div className='profile'>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload Profile Picture</button>
        </div>
      )}
    </div>
  );
};

export default ProfileUploader;
