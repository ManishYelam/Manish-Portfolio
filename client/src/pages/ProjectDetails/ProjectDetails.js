// client/src/pages/ProjectDetails/ProjectDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details from backend API
    const fetchProject = async () => {
      try {
        const response = await api.get(`/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details">
      <div className="container">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.title} />
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
};

export default ProjectDetails;
