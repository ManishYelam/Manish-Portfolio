import React from 'react';
import './SkillList.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiJquery } from 'react-icons/si';

const skills = [
    { name: 'HTML', level: 'Advanced', icon: FaHtml5, },
    { name: 'CSS', level: 'Advanced', icon: FaCss3Alt, },
    { name: 'Tailwind CSS', level: 'Advanced', icon: SiTailwindcss, },
    { name: 'Bootstrap', level: 'Intermediate', icon: FaBootstrap, },
    { name: 'jQuery', level: 'Beginner', icon: SiJquery, },
    { name: 'JavaScript', level: 'Advanced', icon: FaJsSquare, },
    { name: 'React', level: 'Intermediate', icon: FaReact, },
    { name: 'Node.js', level: 'Intermediate', icon: FaNodeJs, },
    { name: 'Express.js', level: 'Intermediate', icon: SiExpress, },
    { name: 'MongoDB', level: 'Advanced', icon: SiMongodb, },
    { name: 'Git', level: 'Beginner', icon: FaGitAlt, },
];

const SkillList = () => {
    return (
        <div className="skill-container">
            <h2 className="skill-header">Skills</h2>
            <ul className="skill-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-icon">{React.createElement(skill.icon)}</span>
                        <div className="skill-details">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
