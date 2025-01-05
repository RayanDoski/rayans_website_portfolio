import React from 'react';
import './hero.css';

// bild
import bild from '../../../assets/images/profileImg.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hej, <span className="wave">👋</span>
            </h1>
            <p className="hero-description">
              I'm a Fullstack developer based in Sweden, specializing in Web development.
            </p>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src={bild} 
                alt="Rayan - Fullstack Developer" 
                className="profile-image"
              />
              <div className="image-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;