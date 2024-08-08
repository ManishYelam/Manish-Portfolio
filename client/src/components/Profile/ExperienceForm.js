// src/components/ExperienceForm/ExperienceForm.js
import React, { useState } from 'react';
import './ExperienceForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const ExperienceForm = ({ onAddExperience }) => {
  const [experience, setExperience] = useState({
    title: '',
    company: '',
    location: '',
    duration: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExperience(experience);
    setExperience({
      title: '',
      company: '',
      location: '',
      duration: '',
      description: ''
    });
  };

  return (
    <form className="experience-form" onSubmit={handleSubmit}>
      <h2><FontAwesomeIcon className='icon' icon={faBriefcase} />Add Experience</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={experience.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <label>Company</label>
      <input
        type="text"
        name="company"
        value={experience.company}
        onChange={handleChange}
        placeholder="Company Name"
        required
      />
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={experience.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <label>Duration</label>
      <input
        type="text"
        name="duration"
        value={experience.duration}
        onChange={handleChange}
        placeholder="Duration"
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={experience.description}
        onChange={handleChange}
        placeholder="Job Description"
        required
      />
      <button type="submit">Add Experience</button>
    </form>
  );
};

export default ExperienceForm;
