"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { PhoneMockup, LaptopMockup } from "./mockups";
import { GlowingOrbsBackground } from "./GlowingOrbsBackground";

interface TerminalModalProps {
  project: Project;
  onClose: () => void;
}

export function TerminalModal({ project, onClose }: TerminalModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setIsVisible(true));

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "bg-black/80 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Terminal Window */}
      <div
        ref={modalRef}
        className={`relative w-full max-w-4xl max-h-[90vh] bg-neutral-950 rounded-lg border border-neutral-700 shadow-2xl overflow-hidden transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-700">
          <div className="flex items-center gap-2">
            {/* Traffic lights */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label="Close modal"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm text-gray-400 font-mono">
              ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}/README.md
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Terminal Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-48px)] custom-scrollbar">
          {/* Hero Image */}
          {project.heroDisplayMode === "phone" ? (
            <div className="relative bg-neutral-800 overflow-hidden py-6">
              <GlowingOrbsBackground />
              <PhoneMockup src={project.image} alt={project.title} />
            </div>
          ) : project.heroDisplayMode === "laptop" ? (
            <div className="relative bg-neutral-800 overflow-hidden py-6">
              <GlowingOrbsBackground />
              <LaptopMockup src={project.image} alt={project.title} />
            </div>
          ) : (
            <div className="relative h-96 bg-neutral-800 overflow-hidden">
              <GlowingOrbsBackground />
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 font-mono text-sm space-y-6">
            {/* Command prompt */}
            <div className="flex items-center gap-2 text-gray-500" aria-hidden="true">
              <span className="text-green-400">$</span>
              <span>cat README.md</span>
            </div>

            {/* Title */}
            <div className="border-b border-neutral-700 pb-4">
              <h2 id="modal-title" className={`text-3xl font-bold ${project.color}`}>
                # {project.title}
              </h2>
              <p className="text-gray-400 mt-2 leading-relaxed">{project.fullDescription || project.description}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">## Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-neutral-800 text-green-400 rounded border border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* The Challenge */}
            {project.challenge && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">## The Challenge</h3>
                <div className="bg-neutral-900 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>
              </div>
            )}

            {/* My Approach */}
            {project.approach && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">## My Approach</h3>
                <div className="bg-neutral-900 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-300 leading-relaxed">{project.approach}</p>
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">## Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-400 mt-0.5" aria-hidden="true">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">## Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((media, index) => (
                    <div
                      key={index}
                      className={`relative rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700 ${
                        media.displayMode === "phone" ? "md:col-span-1" : ""
                      }`}
                    >
                      {/* Phone Mockup */}
                      {media.displayMode === "phone" && media.type === "image" && (
                        <PhoneMockup src={media.src} alt={media.alt} />
                      )}

                      {/* Laptop Mockup */}
                      {media.displayMode === "laptop" && media.type === "image" && (
                        <LaptopMockup src={media.src} alt={media.alt} />
                      )}

                      {/* Default Image */}
                      {media.type === "image" && !media.displayMode && (
                        <div className="aspect-video bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center relative">
                          <Image
                            src={media.src}
                            alt={media.alt || "Screenshot"}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover"
                          />
                          {/* Fallback placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center">
                              <svg
                                className="w-12 h-12 mx-auto text-neutral-600 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="text-xs text-neutral-500">{media.alt || "Image"}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Video */}
                      {media.type === "video" && (
                        <div className="aspect-video bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center group cursor-pointer relative">
                          <video
                            src={media.src}
                            className="w-full h-full object-cover absolute inset-0"
                            aria-label={media.alt || "Video"}
                          />
                          <div className="text-center relative z-10">
                            <div className="w-16 h-16 mx-auto rounded-full bg-neutral-800/80 border border-neutral-600 flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/10 transition-all backdrop-blur-sm">
                              <svg
                                className="w-8 h-8 text-neutral-400 group-hover:text-green-400 transition-colors ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <span className="text-xs text-neutral-500 mt-2 block">{media.alt || "Video"}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="border-t border-neutral-700 pt-6">
                <h3 className="text-lg font-bold text-white mb-3">## Links</h3>
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-400 text-neutral-900 rounded-lg font-medium hover:bg-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-lg font-medium border border-neutral-600 hover:border-green-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Terminal prompt at bottom */}
            <div className="flex items-center gap-2 text-gray-500 pt-4" aria-hidden="true">
              <span className="text-green-400">$</span>
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

