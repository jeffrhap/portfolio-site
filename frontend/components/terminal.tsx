export default function Terminal({ className }: { className?: string }) {

  return (
    <div className={`max-w-lg w-full mx-auto mb-12 animate-slide-up ${className}`}>
      <div className="bg-[#101114] border border-[#23252a] rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 p-4 bg-[#23252a80] border-b border-[#23252a]">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="flex items-center">
            <span className="text-green-400">$</span>
            <span className="ml-2 text-[#686f7d]">rm -rf /bugs</span>
          </div>
          <div className="text-green-400 mt-1">permission denied</div>
          <div className="flex items-center mt-4">
            <span className="text-green-400">$</span>
            <span className="ml-2 text-[#686f7d] animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
