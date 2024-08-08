import React, { useState, useEffect } from 'react';
import { getResume } from '../../services/resumeService';
import './ResumeViewer.css';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeViewer = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const resume = await getResume();
        setResume(resume);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResume();
  }, []);

  return (
    <div className="resume-viewer">
      <h2><FontAwesomeIcon className='icon' icon={faFilePdf}/>Resume</h2>
      {resume ? (
        <iframe src={`http://localhost:5000/${resume.filepath}`} title="Resume" className="resume-iframe"></iframe>
      ) : (
        <p>No resume uploaded yet.</p>
      )}
    </div> 
  );
};

export default ResumeViewer;
