import React, { useState, useEffect } from 'react';
import { getProfilePicture } from '../../services/profileService';

const ProfileViewer = () => {
  const [profile, setProfile] = useState(null);

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

  return (
    <div>
      {profile ? (
        <div className="profile-image-container">
          <img src={`http://localhost:5000/${profile.filepath}`} alt="Profile" className="profile-image" />
        </div>
      ) : (
        <p>No profile picture uploaded yet.</p>
      )}
    </div>
  );
};

export default ProfileViewer;
