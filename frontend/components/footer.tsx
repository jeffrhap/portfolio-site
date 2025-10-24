import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t border-neutral-800">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between text-white py-6 sm:py-10 px-4 sm:px-6 gap-4 sm:gap-0">
        <p className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-neutral-600">
          <span className="text-green-400 flex items-center gap-1">
            <Terminal className="w-4 h-4" />
            jeffrey
          </span>
          <span className="hidden sm:inline">|</span>
          <span> Front-end Developer</span>
        </p>
        <p className="text-xs sm:text-sm text-neutral-600">{"// Made using React, Next.js, Tailwind CSS, TypeScript and Vercel"}</p>
      </div>
    </footer>
  );
}
