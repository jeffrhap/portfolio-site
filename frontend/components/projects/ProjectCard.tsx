"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { MiniPhoneMockup } from "./mockups";
import { GlowingOrbsBackground } from "./GlowingOrbsBackground";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group bg-neutral-900 rounded-xl overflow-hidden hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
      aria-label={`View details for ${project.title}`}
    >
      {/* Project Image */}
      <div className="relative aspect-square bg-neutral-800 overflow-hidden">
        {/* Stylized background */}
        <GlowingOrbsBackground />

        {/* Project image - conditionally render phone mockup or regular image */}
        {project.heroDisplayMode === "phone" ? (
          <MiniPhoneMockup src={project.image} alt={project.title} />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Project type label */}
        {project.projectType && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-2 py-1 text-xs font-medium rounded bg-neutral-900/90 text-green-400 border border-green-400/50">
              {project.projectType === "livewall" ? "Livewall" : "Personal"}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-green-400 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
            Click to view details
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className={`text-xl font-bold ${project.color} group-hover:text-white transition-colors`}>
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={`${tech}-${techIndex}`}
              className="px-3 py-1 text-xs font-medium bg-neutral-800 text-green-400 rounded-full border border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4 pt-4 border-t border-neutral-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 focus:outline-none focus:text-green-400"
              aria-label={`View live demo of ${project.title}`}
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
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 focus:outline-none focus:text-green-400"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

