'use client'
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

function Contact({ isVisible }) {
    return (
        <section id="contact" className={`bg-[var(--color-primary-bg)] text-[var(--color-primary-text)] py-20 px-4 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 ${isVisible ? 'opacity-100 animate-slideUp' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-text)]">Get In Touch</h2>
                    <p className="text-lg mt-2 max-w-lg mx-auto text-[var(--color-primary-text)] opacity-80">
                        Have a question, a project in mind, or just want to say hi? I'd love to hear from you!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-blue)] to-transparent mx-auto mt-4 rounded-full about-heading-underline-shadow"></div>
                </div>

                <div className="flex align-center justify-center">
                    <div className={` w-full lg:w-1/2 p-8 bg-white rounded-xl shadow-lg contact-info-shadow transform transition-all duration-700 ${isVisible ? 'opacity-100 animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                        <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary-text)]">My Details</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Mail className="w-6 h-6 text-[var(--color-accent-blue)]" />
                                <a href="mailto:Rayan.d15@outlook.com" className="text-lg text-[var(--color-primary-text)] opacity-90 hover:text-[var(--color-accent-blue)] transition-colors">Rayan.d15@outlook.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-6 h-6 text-[var(--color-accent-blue)]" />
                                <span className="text-lg text-[var(--color-primary-text)] opacity-90">+46 700252258</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-6 h-6 text-[var(--color-accent-blue)]" />
                                <span className="text-lg text-[var(--color-primary-text)] opacity-90">Malmö, Sweden</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mt-10 mb-4 text-[var(--color-primary-text)]">Connect With Me</h3>
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/in/reyan-doski-b94795253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-blue)] transition-colors transform hover:-translate-y-1 hover:scale-110">
                                <Linkedin className="w-8 h-8" />
                            </a>
                            <a href="https://github.com/RayanDoski" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                                className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-blue)] transition-colors transform hover:-translate-y-1 hover:scale-110">
                                <Github className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contact;
