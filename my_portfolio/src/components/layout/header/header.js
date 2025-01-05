import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo/Name */}
          <div className="logo">
            <h1>Reyan Doski</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>

          {/* Contact Icons */}
          <div className="contact-icons">
            <a href="mailto:Rayan.d15@outlook.com">
              <Mail size={20} />
            </a>
            <a href="https://github.com/RayanDoski">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/reyan-doski-b94795253/">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <div className="mobile-contact-icons">
                <a href="mailto:your.email@example.com">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/yourusername">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourusername">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;