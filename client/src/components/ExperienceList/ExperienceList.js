import React from 'react';
import './ExperienceList.css';
import { faBriefcase, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const experiences = [
    { 
        id: 1, 
        title: 'MERN Stack Web Developer Intern', 
        company: 'SevenMentor Pvt. Ltd & Training', 
        location: 'Shivaginagar, Pune', 
        duration: 'Dec 2023 - July 2024', 
        description: 'Worked on frontend development using React.js and backend development using Node.js, Express.js, MongoDB.' 
    }
];

const ExperienceList = () => {
    return (
        <div className="experience-container">
            <h2 className="experience-header"><FontAwesomeIcon className='icon' icon={faBriefcase} /> Experiences</h2>
            {experiences.map(experience => (
                <div key={experience.id} className="experience-item">
                    <div className="experience-top">
                        <div className="experience-title">{experience.title}</div>
                        <FontAwesomeIcon className='edit-icon' icon={faEdit} />
                    </div>
                    <div className="experience-details">
                        <div className="experience-company">{experience.company}</div>
                        <div className="experience-location">{experience.location}</div>
                        <div className="experience-duration">{experience.duration}</div>
                    </div>
                    <p className="experience-description">{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ExperienceList;
