import React from 'react';
import ProfileUpload from '../../components/Profile/ProfileUpload';
import ExperienceForm from '../../components/Profile/ExperienceForm';
import SkillForm from '../../components/Profile/SkillForm';
import ProjectForm from '../../components/Profile/ProjectForm';
import './Profile.css';

const Profile = () => {
  const handleAddExperience = (experience) => {
    console.log('New Experience:', experience);
    // Add logic to handle the new experience (e.g., send to server or update state)
  };

  const handleAddSkill = (skill) => {
    console.log('New Skill:', skill);
    // Add logic to handle the new skill (e.g., send to server or update state)
  };

  const handleAddProject = (project) => {
    console.log('New Project:', project);
    // Add logic to handle the new project (e.g., send to server or update state)
  };

  return (
    <div className="profile-page">
      
      <div className="forms-container">
      <ProfileUpload />
        <ExperienceForm onAddExperience={handleAddExperience} />
        <SkillForm onAddSkill={handleAddSkill} />
        <ProjectForm onAddProject={handleAddProject} />
      </div>
    </div>
  );
};

export default Profile;
