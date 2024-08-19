// src/components/ProjectCard/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
