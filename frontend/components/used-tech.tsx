"use client";

interface Technology {
  name: string;
  icon: string; // Path to SVG file in public folder
  category: string;
  color: string;
}

const technologies: Technology[] = [
  { 
    name: "Vue", 
    icon: "/assets/icons/vue.svg",
    category: "Frontend Frameworks", 
    color: "text-green-400" 
  },
  { 
    name: "Nuxt", 
    icon: "/assets/icons/nuxt.svg",
    category: "Meta Frameworks", 
    color: "text-green-400" 
  },
  { 
    name: "React", 
    icon: "/assets/icons/react.svg",
    category: "Frontend Frameworks", 
    color: "text-blue-400" 
  },
  { 
    name: "Next.js", 
    icon: "/assets/icons/nextjs.svg",
    category: "Meta Frameworks", 
    color: "text-green-400" 
  },
  {
    name: "Tailwind",
    icon: "/assets/icons/tailwind.svg",
    category: "Styling",
    color: "text-cyan-400",
  },
  {
    name: "GSAP",
    icon: "/assets/icons/gsap.svg",
    category: "Animation",
    color: "text-cyan-400",
  },
  { 
    name: "Git", 
    icon: "/assets/icons/git.svg",
    category: "Development Tools", 
    color: "text-pink-400" 
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/typescript.svg",
    category: "Languages",
    color: "text-blue-400",
  },
  {
    name: "Figma",
    icon: "/assets/icons/figma.svg",
    category: "Design Tools",
    color: "text-blue-400",
  },
];

// SVG Icon Component
function TechIcon({ iconPath, color }: { iconPath: string; color: string }) {
  return (
    <img
      src={iconPath}
      alt="Tech icon"
      className={`w-8 h-8 ${color}`}
    />
  );
}

export default function UsedTech() {
  return (
    <section className="py-20 px-6">
      <div className="flex flex-col gap-20 justify-center items-center">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="text-green-400">{"<"}</span>
            TechStack
            <span className="text-green-400">{"/>"}</span>
          </h2>
          <h3 className="text-2xl text-white">Embracing an always-evolving technology stack</h3>
        </div>

        <div className="space-y-8 w-full">
          {/* Technology Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="bg-neutral-900 rounded-lg p-4 hover:bg-neutral-800 transition-colors group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="group-hover:scale-110 transition-transform">
                    <TechIcon iconPath={tech.icon} color={tech.color} />
                  </div>
                  <div className={`text-sm font-medium text-white text-center`}>{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
