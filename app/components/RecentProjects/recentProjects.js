'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const latestProject = {
    id: "Book-Recommendation-LLM",
    title: "AI-Powered Book Recommender with LLM Integration",
    shortDescription: "An intelligent book recommendation application utilizing an LLM API to provide personalized suggestions.",
    fullDescription: "This application offers a unique approach to book recommendations. Users engage with an interactive quiz to express their preferences. Their responses are then processed by a Large Language Model (LLM) through an API integration. The AI analyzes these insights to curate a personalized list of book recommendations, complete with a detailed explanation and motivation for each choice, ensuring a highly tailored and engaging experience. The focus is on a clean, intuitive, and responsive user interface, providing a lightweight and fast Browse experience.", // Detailed full description
    technologies: ["React", "Next.js", "Tailwind CSS", "LLM API Integration"],
    liveLink: "https://bookapplication-ten.vercel.app/",
    githubLink: "https://github.com/RayanDoski/bookapplication",
    demoType: "image",
    demoSrc: "/images/Simple_three_in_a_row_bookApplication.jpg",
    features: [
        "Interactive user preference quiz",
        "LLM API integration for personalized recommendations",
        "Detailed motivations for each recommended book",
        "Clean and intuitive user interface",
        "Responsive design for all devices",
        "Lightweight and fast performance"
    ],
};

function FeaturedProject() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1, // Utlös när 10% av sektionen är synlig
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    if (!latestProject) return null;

    return (
        <section
            id="latest-project"
            ref={sectionRef}
            className="py-20 px-4 bg-[var(--color-primary-bg)] text-[var(--color-primary-text)] font-inter overflow-hidden"
        >
            <div className="max-w-7xl mx-auto text-center md:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16">
                    My Latest <span className="text-[var(--color-accent-blue)]">Project</span>
                </h2>

                <div className={`
                    flex flex-col lg:flex-row items-center gap-12 lg:gap-16
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}>
                    <div className="lg:w-7/12 w-full flex-shrink-0">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-[var(--color-darker-blue)]">
                            {/* Dynamisk rendering baserad på demoType */}
                            <div className="w-full aspect-video relative">
                                <Image
                                    src={latestProject.demoSrc}
                                    alt={`${latestProject.title} Screenshot`}
                                    fill // <--- Använd fill för att fylla utrymmet
                                    style={{ objectFit: 'cover' }} // <--- Styla hur bilden fyller
                                    className="rounded-lg" // Kan behöva justeras om du har border på föräldern
                                    onError={(e) => { e.target.onerror = null; e.target.src = "/images/me.jpg"; }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Höger kolumn: Text och Detaljer */}
                    <div className="lg:w-5/12 w-full space-y-6">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-accent-blue)] mb-4">
                            {latestProject.title}
                        </h3>
                        <p className="text-lg leading-relaxed opacity-85">
                            {latestProject.fullDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {latestProject.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-[var(--color-darker-blue)] text-white text-sm font-semibold px-4 py-2 rounded-full opacity-90"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {latestProject.features && latestProject.features.length > 0 && (
                            <>
                                <h4 className="text-xl font-bold text-[var(--color-accent-blue)] mt-6">Key features:</h4>
                                <ul className="list-disc list-inside text-md opacity-85 space-y-1">
                                    {latestProject.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                            <a
                                href={latestProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-[var(--color-primary-text)] rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-darker-blue)] group-hover:from-[var(--color-accent-blue)] group-hover:to-[var(--color-darker-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                <span className="relative px-6 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                </span>
                            </a>
                            <a
                                href={latestProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-[var(--color-primary-text)] rounded-lg bg-gradient-to-br from-[var(--color-darker-blue)] to-[var(--color-accent-blue)] group-hover:from-[var(--color-darker-blue)] group-hover:to-[var(--color-accent-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                <span className="relative px-6 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                                    <Github className="w-5 h-5" /> View on GitHub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProject;