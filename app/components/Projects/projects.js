'use client'
import { useState, useEffect } from 'react'; // Import useEffect for fade-in animation

function Projects({ isVisible }) {
    const mockRepos = [
        {
            id: 1,
            name: "Scandifit",
            description: "A webbapplcation that generates a personalized workout plan, diet plan and sleep scheudal based on user preferences and fitness goals.",
            language: ["React", "Python", "Html", "CSS", "JavaScript", "MySQL", "Flask"],
            github: "https://github.com/RayanDoski/scandifit",
            live: null,
        },
        {
            id: 2,
            name: "DoskiFlix",
            description: "A personolized movie recommendation system that suggests movies based on user preferences and viewing history.",
            language: ["React", "Python", "Html", "CSS", "MySQL", "Flask"],
            github: "https://github.com/RayanDoski/DoskiFlix",
            live: null,
        },
        {
            id: 3,
            name: "CryptoCoin",
            description: "A webb application that provides real-time cryptocurrency prices, market data, and lets yours invest in various cryptocurrencies with fiat money.",
            language: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/RayanDoski/cryptocoin",
            live: null,
        },
        {
            id: 4,
            name: "rayans_website_portfoliorayans_website_portfolio",
            description: "A personal portfolio website showcasing my projects, skills, and experience.",
            language: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/RayanDoski/rayans_website_portfolio",
            live: null,
        },
    ];

    const [filter, setFilter] = useState("All");


    const filteredRepos = filter === "All"
        ? mockRepos
        : mockRepos.filter((repo) => repo.language === filter);

    return (
        <section id="projects" className={`bg-[var(--color-primary-bg)] text-[var(--color-primary-text)] py-20 px-4 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 ${isVisible ? 'opacity-100 animate-slideUp' : 'opacity-0'}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-text)]">GitHub Projects</h2>
                    <p className="text-lg mt-2 max-w-lg mx-auto text-[var(--color-primary-text)] opacity-80">
                        Explore some of my open-source projects hosted on GitHub.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-blue)] to-transparent mx-auto mt-4 rounded-full about-heading-underline-shadow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRepos.length > 0 ? (
                        filteredRepos.map((repo, idx) => (
                            <div
                                key={repo.id}
                                className={`block group bg-white p-6 rounded-lg shadow-md border border-[var(--color-subtle-gray)] transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative project-card-shadow
                                ${isVisible ? 'opacity-100 animate-slideUp' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent-blue)]">{repo.name}</h3>
                                <p className="text-[var(--color-primary-text)] opacity-90 mb-4">{repo.description}</p>

                                <div className="flex gap-4 items-center text-sm mb-4">
                                    {repo.language.map(language => (
                                        <span className="text-[var(--color-primary-text)] opacity-70 font-medium">
                                            {language}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={repo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-darker-blue)] text-white shadow-md hover:from-[var(--color-darker-blue)] hover:to-[var(--color-accent-blue)] transition-all duration-300 transform hover:scale-105"
                                    >
                                        View Code
                                    </a>
                                    {repo.live && (
                                        <a
                                            href={repo.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-white border border-[var(--color-subtle-gray)] text-[var(--color-primary-text)] shadow-sm hover:bg-[var(--color-subtle-gray)] transition-all duration-300 transform hover:scale-105"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={`col-span-full text-center text-[var(--color-primary-text)] opacity-70 ${isVisible ? 'opacity-100 animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                            No projects found for "{filter}".
                        </p>
                    )}
                </div>
            </div>

        </section>
    );
}

export default Projects;
