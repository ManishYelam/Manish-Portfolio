// src/components/SkillForm/SkillForm.js
import React, { useState } from 'react';
import './SkillForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

const SkillForm = ({ onAddSkill }) => {
  const [skill, setSkill] = useState({
    name: '',
    level: '',
    proficiency: '',
    icon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSkill(skill);
    setSkill({
      name: '',
      level: '',
      proficiency: '',
      icon: ''
    });
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <h2><FontAwesomeIcon className='icon' icon={faGem} />Add Skill</h2>
      <label>Skill Name</label>
      <input
        type="text"
        name="name"
        value={skill.name}
        onChange={handleChange}
        placeholder="Skill Name"
        required
      />
      <label>Skill Level</label>
      <input
        type="text"
        name="level"
        value={skill.level}
        onChange={handleChange}
        placeholder="Skill Level (e.g. Beginner, Intermediate, Advanced)"
        required
      />
      <label>Proficiency (%)</label>
      <input
        type="number"
        name="proficiency"
        value={skill.proficiency}
        onChange={handleChange}
        placeholder="Proficiency Percentage"
        min="0"
        max="100"
        required
      />
      <label>Icon (Class Name)</label>
      <input
        type="text"
        name="icon"
        value={skill.icon}
        onChange={handleChange}
        placeholder="Icon Class Name (e.g. FaHtml5)"
        required
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillForm;
