import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import './projects.css';

import scandifit from '../../../assets/images/scandifit.png';
import doskiflix from '../../../assets/images/doskiflix.png';
import portfolio from '../../../assets/images/portfolio.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Scandifit",
      description: "A full-stack training platform built with React and Flask, featuring user authentication and payment integration.",
      technologies: ["React", "JavaScript", "Flask", "Python", "MySQL", "HTML", "CSS"],
      image: scandifit,
      githubLink: "https://github.com/RayanDoski/scandifit",
      // liveLink: "https://project1.com",
      category: "fullstack"
    },
    {
      title: "Doskiflix",
      description: "A full-stack movie platform built with React and Flask, featuring user authentication and movie recommendations.",
      technologies: ["React", "JavaScript", "Flask", "Python", "JSON", "HTML", "CSS"],
      image: doskiflix,
      githubLink: "https://github.com/RayanDoski/DoskiFlix",
      // liveLink: "https://project2.com",
      category: "fullstack"
    },
    {
      title: "Portfolio",
      // description: "RESTful API for task management with user authentication and role-based access control.",
      description: "A responsive portfolio website showcasing my work and skills, built with modern web technologies.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: portfolio,
      githubLink: "https://github.com/RayanDoski/portfolio",
      liveLink: "https://project3.com",
      category: "frontend"
    }
  ];

  const categories = ['all', 'frontend', 'fullstack'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={24} />
                      <span>Code</span>
                    </a>
                    {/* <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={24} />
                      <span>Live</span>
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <Code size={16} />
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;