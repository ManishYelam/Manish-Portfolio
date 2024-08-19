// src/components/ProjectForm/ProjectForm.js
import React, { useState } from 'react';
import './ProjectForm.css';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectForm = ({ onAddProject }) => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    imageUrl: '',
    technologies: '',
    liveUrl: '',
    githubUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const techArray = project.technologies.split(',').map(tech => tech.trim());
    onAddProject({ ...project, technologies: techArray });
    setProject({
      title: '',
      description: '',
      imageUrl: '',
      technologies: '',
      liveUrl: '',
      githubUrl: ''
    });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2><FontAwesomeIcon className='icon' icon={faProjectDiagram} />Add Project</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={project.title}
        onChange={handleChange}
        placeholder="Project Title"
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={project.description}
        onChange={handleChange}
        placeholder="Project Description"
        required
      />
      <label>Image URL</label>
      <input
        type="text"
        name="imageUrl"
        value={project.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <label>Technologies (comma separated)</label>
      <input
        type="text"
        name="technologies"
        value={project.technologies}
        onChange={handleChange}
        placeholder="HTML, CSS, JavaScript, React js"
        required
      />
      <label>Live URL</label>
      <input
        type="url"
        name="liveUrl"
        value={project.liveUrl}
        onChange={handleChange}
        placeholder="Live URL"
        required
      />
      <label>GitHub URL</label>
      <input
        type="url"
        name="githubUrl"
        value={project.githubUrl}
        onChange={handleChange}
        placeholder="GitHub URL"
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
