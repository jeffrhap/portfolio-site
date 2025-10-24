import { Code2 } from "lucide-react";
import Terminal from "./terminal";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6">
      <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
          Building <span className="text-green-400">modern</span>
          <br />
          web experiences.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 font-light text-center">Transforming ideas into clean, user-friendly websites.</p>
        <Terminal className="mt-8" />
      </div>

      {/* Programming widgets - Hidden on mobile */}
      <div className="hidden sm:block absolute top-10 left-10 opacity-30">
        <div className="bg-[#23252a80] border border-[#23252a] rounded-md p-4 font-mono text-xs animate-float">
          const dev = () =&gt; {"{"}
          <br />
          &nbsp;&nbsp;return &quot;awesome&quot;
          <br />
          {"}"}
        </div>
      </div>
      <div className="hidden md:block absolute top-20 right-20 opacity-20">
        <Code2 className="w-8 h-8 text-green-400 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="hidden sm:block absolute bottom-32 left-20 opacity-30">
        <div className="font-mono text-sm text-[#6699ff] animate-float" style={{ animationDelay: "1s" }}>
          {"<dev />"}
        </div>
      </div>
      <div className="hidden md:block absolute bottom-20 right-10 opacity-20">
        <div className="font-mono text-lg text-[#ffe14d] animate-float" style={{ animationDelay: "1.5s" }}>
          {"{ }"}
        </div>
      </div>
      <div className="hidden sm:block absolute top-1/2 left-5 opacity-15">
        <div className="font-mono text-xs text-[#cc66ff] animate-float" style={{ animationDelay: "2s" }}>
          npm run build
        </div>
      </div>
    </section>
  );
}
