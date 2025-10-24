"use client";

import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

enum THEMES {
  light = "light",
  dark = "dark",
}

export default function NavBar() {
  const [theme, setTheme] = useState<THEMES>(THEMES.dark);

  const toggleTheme = () => {
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);
  };

  const downloadCV = () => {
    const cv = "/assets/cv_jeffrey_happel.pdf";
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CV Jeffrey Happel.pdf";
    link.click();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-6 py-4.5 flex justify-between items-center">
        <div className="flex items-center">
          <Terminal className="w-6 h-6 text-green-400" />
          <h1 className="text-lg font-bold text-white">jeffrey</h1>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/jeffrhap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeffrey-happel-31714125/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:contact@jeffreyhappel.nl"
            className="text-white hover:text-green-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
