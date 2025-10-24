"use client";

import { Terminal } from "lucide-react";
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
        <div className="flex items-center gap-8">
          {/* <button
            type="button"
            onClick={toggleTheme}
            className="text-neutral-600 cursor-pointer"
          >
            THEMES.{theme}
          </button> */}
          {/* <button onClick={downloadCV} className="cursor-pointer">
            downloadCV<span className="text-green-400">()</span>
          </button> */}
        </div>
      </div>
    </header>
  );
}
