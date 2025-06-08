'use client'
import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

function Hero({ isVisible }) {
    return (
        <section id='home' className="text-[var(--color-primary-text)] flex items-center py-50 px-4 font-inter bg-[var(--color-primary-bg)]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">

                <div className={`md:w-1/2 space-y-8 text-center md:text-left transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--color-primary-text)]">
                        Hi, I'm <span className="text-[var(--color-accent-blue)]">Reyan Doski</span> <br /> A Fullstack Developer
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--color-primary-text)] opacity-90 max-w-xl mx-auto md:mx-0">
                        Building modern, responsive, and accessible web applications with Next.js, React, Tailwind CSS and more!
                    </p>
                    <p className="text-md text-[var(--color-primary-text)] opacity-70 flex items-center justify-center md:justify-start gap-2">
                        <MapPin className="w-5 h-5 text-[var(--color-accent-blue)]" /> Based in Malmö, Sweden.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#projects" className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[var(--color-primary-text)] rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-darker-blue)] group-hover:from-[var(--color-accent-blue)] group-hover:to-[var(--color-darker-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                View My Work
                            </span>
                        </a>
                        <a href="#contact" className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[var(--color-primary-text)] rounded-lg bg-gradient-to-br from-[var(--color-darker-blue)] to-[var(--color-accent-blue)] group-hover:from-[var(--color-darker-blue)] group-hover:to-[var(--color-accent-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 transition-all duration-300 ease-in-out transform hover:scale-105">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                Contact Me
                            </span>
                        </a>
                    </div>
                </div>

                <div className={`md:w-1/2 flex justify-center transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float hero-image-shadow rounded-full">
                        <img
                            src="/images/me.jpg"
                            alt="Developer Portrait"
                            className="rounded-full object-cover border-4 border-[var(--color-accent-blue)] w-full h-full"
                            onError={(e) => { e.target.onerror = null; e.target.src = "/images/me.jpg"; }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;