import React from 'react';
import { Code, Laptop, Globe, Coffee } from 'lucide-react';
import './about.css';

import aboutMe from "../../../assets/images/about-me.png"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src={aboutMe} 
              alt="Profile" 
              className="about-image" 
            />
            <div className="image-decoration"></div>
          </div>

          <div className="about-text-container">
            <div className="about-intro">
              <h3>Passionate Fullstack Developer</h3>
              <p className="about-description">
                As a fullstack developer based in Sweden, I bridge the gap between creative design and technical implementation. 
                With expertise in both frontend and backend technologies, I create seamless, user-centric applications that solve 
                real-world problems. My approach combines clean code practices with intuitive user experiences, ensuring that 
                every project I tackle is both technically robust and visually engaging.
              </p>
              <p className="about-description">
                What sets me apart is my dedication to continuous learning and adaptation to emerging technologies. 
                Whether it's crafting responsive user interfaces with React or building scalable backend systems with Python and Flask, 
                I bring a holistic perspective to development that ensures comprehensive solutions.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <Code className="highlight-icon" />
                <h4>Clean Code</h4>
                <p>Writing maintainable, efficient, and well-documented code</p>
              </div>
              
              <div className="highlight-card">
                <Laptop className="highlight-icon" />
                <h4>Full Stack</h4>
                <p>Seamless integration of frontend and backend technologies</p>
              </div>
              
              <div className="highlight-card">
                <Globe className="highlight-icon" />
                <h4>Global Mindset</h4>
                <p>Creating solutions with international accessibility</p>
              </div>
              
              <div className="highlight-card">
                <Coffee className="highlight-icon" />
                <h4>Problem Solver</h4>
                <p>Turning complex challenges into elegant solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;