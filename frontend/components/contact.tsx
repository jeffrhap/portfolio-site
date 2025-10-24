"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="text-green-400 font-mono text-sm md:text-base py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          <span className="text-green-400">$</span> contact --me
        </div>
        <p className="text-lg text-neutral-600 font-light mb-8">Let&apos;s work together</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/jeffrhap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeffrey-happel-31714125/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@jeffreyhappel.nl"
            className="text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
