import React from 'react';
import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "PHP", level: 60 },
        { name: "C#", level: 50 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", level: 85 },
        { name: "Flask", level: 90 }
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Adobe Photoshop", level: 75 },
        { name: "Figma", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;