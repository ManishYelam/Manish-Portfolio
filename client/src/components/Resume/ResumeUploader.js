import React, { useState, useEffect } from 'react';
import { getResume, uploadResume } from '../../services/resumeService';
import './ResumeUploader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const ResumeUploader = () => {
  const [resume, setResume] = useState(null);
  const [file, setFile] = useState(null);

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('resume', file);
    try {
      const uploadedResume = await uploadResume(formData);
      setResume(uploadedResume);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="resume-uploader">
      <h2><FontAwesomeIcon className='icon' icon={faFilePdf}/>Resume Upload</h2>
      {resume ? (
        <div>
          <iframe src={`http://localhost:5000/${resume.filepath}`} title="Resume"></iframe>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Update Resume</button>
        </div>
      ) : (
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload Resume</button>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
