// client/src/pages/Projects/Projects.js
import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import api from '../../services/api';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        <h2><FontAwesomeIcon className='icon' icon={faProjectDiagram}/>My Projects</h2>
        <div className="projects-list">
          {projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
