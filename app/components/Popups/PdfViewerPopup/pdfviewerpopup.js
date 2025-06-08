'use client'
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from 'lucide-react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

function PdfViewerPopup({ isOpen, onClose, pdfUrl }) {

    // Ref for the modal content to handle clicks outside the modal.
    const modalRef = useRef(null);

    // useEffect to handle body scroll lock when the modal is open.
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling on body
        } else {
            document.body.style.overflow = 'unset'; // Re-enable scrolling on body
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle clicks outside the modal content to close the popup.
    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    // If the popup is not open, return null to render nothing.
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-100 transition-opacity duration-300 ease-out"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-lg w-11/12 h-5/6 max-w-4xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()} // onclick = Prevent clicks inside from closing the modal
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[var(--color-primary-text)] hover:text-[var(--color-accent-blue)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]"
                    aria-label="Close PDF viewer"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-4 ml-5 text-[var(--color-primary-text)]">My CV</h3>

                    <iframe
                        src={pdfUrl}
                        title="My CV"
                        className="flex-grow w-full border-2 border-[var(--color-accent-blue)] rounded-xl shadow-2xl"
                    >
                        Your browser does not support PDFs. You can <a href={pdfUrl} download className="text-[var(--color-accent-blue)] hover:underline">download the CV here</a>.
                    </iframe>

                    <div className="mt-4 text-center">
                        <a
                            href={pdfUrl}
                            download="Reyan_Doski_CV.pdf"
                            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-darker-blue)] group-hover:from-[var(--color-darker-blue)] group-hover:to-[var(--color-accent-blue)] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-[var(--color-primary-text)] rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PdfViewerPopup;