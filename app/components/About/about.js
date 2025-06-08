'use client'
import React, { useEffect, useState } from 'react';

function About({ isVisible }) {
    const skills = [
        "C#", "PHP", "Python", "JavaScript", "HTML", "CSS",
        "Tailwind CSS", "Bootstrap", "Flask", "Bottle", "React", "Next.js",
        "Adobe Photoshop", "Adobe Premiere Pro", "Figma", "Google Analytics"
    ];

    return (
        <section id="about" className={`bg-[var(--color-primary-bg)] text-[var(--color-primary-text)] py-20 px-4 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-text)]">About Me</h2>
                    <p className="text-lg mt-2 max-w-lg mx-auto text-[var(--color-primary-text)] opacity-80">
                        A passionate developer crafting web applications using modern technologies.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-blue)] to-transparent mx-auto mt-4 rounded-full about-heading-underline-shadow"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className={`md:w-2/3 space-y-6 transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-lg leading-relaxed text-[var(--color-primary-text)] opacity-90">
                            I'm a full-stack developer with experience in both frontend and backend technologies.
                            My journey started with learning HTML, CSS, and JavaScript, and quickly expanded to Python, PHP, C#, and frameworks like Flask and Bottle.
                        </p>
                        <p className="text-lg leading-relaxed text-[var(--color-primary-text)] opacity-90">
                            Over time, I’ve built dynamic websites and scalable APIs while focusing on clean code,
                            performance, and user-friendly design. Whether it's building a personal project or working in a team environment, I always aim to deliver quality solutions.
                        </p>
                        <p className="text-lg leading-relaxed text-[var(--color-primary-text)] opacity-90">
                            Currently exploring the power of React and Next.js to build modern, fast, and accessible web experiences.
                        </p>
                    </div>

                    <div className={`md:w-1/3 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary-text)]">Technologies I've Worked With</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-[var(--color-subtle-gray)] border border-[var(--color-subtle-gray)] rounded-lg text-sm font-medium text-[var(--color-primary-text)] opacity-90
                                               transition-all duration-300 transform hover:-translate-y-1 hover:bg-[var(--color-accent-blue)] hover:text-white hover:shadow-lg cursor-pointer"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;