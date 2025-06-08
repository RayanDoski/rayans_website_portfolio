'use client'
import React, { useState, useEffect } from "react";
import PdfViewerPopup from "@/app/components/Popups/PdfViewerPopup/pdfviewerpopup"; // Importing the PDF viewer popup component
import { X, Menu } from 'lucide-react';

function Header({ isVisible}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // open/closed state of the PDF viewer popup.
    const [isPdfPopupOpen, setIsPdfPopupOpen] = useState(false);

    // for the links
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    // Function to open and close the PDF viewer popup.
    const openPdfPopup = () => setIsPdfPopupOpen(true);
    const closePdfPopup = () => setIsPdfPopupOpen(false);

    return (
        <>
            <PdfViewerPopup
                isOpen={isPdfPopupOpen}
                onClose={closePdfPopup}
                pdfUrl="/Cv/CV.pdf"
            />
            <header className={`bg-[var(--color-primary-bg)] text-[var(--color-primary-text)] header-soft-shadow border-b border-[var(--color-subtle-gray)] sticky top-0 z-50 font-inter transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo */}
                        <div className="text-2xl font-extrabold flex items-center space-x-2 animate-pulse-once">
                            <span className="text-[var(--color-accent-blue)]">{'<'}</span>
                            <span className="text-[var(--color-primary-text)]">Reyan Doski</span>
                            <span className="text-[var(--color-accent-blue)]">{'/>'}</span>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {links.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-[var(--color-primary-text)] hover:text-[var(--color-accent-blue)] transition-all duration-300 group transform hover:translate-y-[-2px]"
                                >
                                    {item.name}
                                    {/* Line under for effekt when hovering */}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent-blue)] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}

                            <a
                                href="#"
                                onClick={() => openPdfPopup()}
                                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-[var(--color-primary-text)] rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-darker-blue)] group-hover:from-[var(--color-accent-blue)] group-hover:to-[var(--color-darker-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                    Resume
                                </span>
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden focus:outline-none text-[var(--color-primary-text)] hover:text-[var(--color-accent-blue)] transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-7 w-7" />
                            ) : (
                                <Menu className="h-7 w-7" />
                            )}
                        </button>

                    </div>

                    {/* Mobile Navigation */}
                    <nav className={`md:hidden flex flex-col pb-4 space-y-4 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        {links.map((item) => (
                            <>
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-blue)] transition-colors pl-2 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                                <div className="w-full h-0.5 bg-gray-300"></div>
                            </>
                        ))}

                        {/* Open Pdf Btn On Mobile */}
                        <a href="#" className="group relative inline-flex items-center justify-center p-0.5 self-start px-4 py-2 ml-2 overflow-hidden text-sm font-medium text-[var(--color-primary-text)] rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-darker-blue)] group-hover:from-[var(--color-accent-blue)] group-hover:to-[var(--color-darker-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => { setIsMenuOpen(false); openPdfPopup() }}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                Resume
                            </span>
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;