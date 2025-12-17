"use client";

import { useState } from "react";
import { Project } from "@/types/project";
import { projects, INITIAL_DISPLAY_COUNT } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { TerminalModal } from "./TerminalModal";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreProjects = projects.length > INITIAL_DISPLAY_COUNT;

  return (
    <>
      <section className="py-20 px-6" aria-labelledby="projects-heading">
        <div className="flex flex-col gap-16 justify-center items-center">
          {/* Section Header */}
          <div className="space-y-6 text-center">
            <h2 id="projects-heading" className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="text-green-400" aria-hidden="true">{"<"}</span>
              Projects
              <span className="text-green-400" aria-hidden="true">{"/>"}</span>
            </h2>
            <h3 className="text-2xl text-white">A selection of my latest work</h3>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {/* View All / Show Less Button */}
          {hasMoreProjects && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-green-400 rounded-lg border border-neutral-700 hover:border-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
              aria-expanded={showAll}
              aria-controls="projects-grid"
            >
              <span className="font-medium">
                {showAll ? "Show Less" : `View More Projects (${projects.length})`}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* Terminal Modal */}
      {selectedProject && (
        <TerminalModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

