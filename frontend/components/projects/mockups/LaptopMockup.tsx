import Image from "next/image";

interface LaptopMockupProps {
  src: string;
  alt?: string;
}

export function LaptopMockup({ src, alt }: LaptopMockupProps) {
  return (
    <div className="flex justify-center items-center p-4">
      {/* Laptop */}
      <div className="relative" role="img" aria-label={alt || "Laptop mockup"}>
        {/* Screen */}
        <div className="relative bg-neutral-800 rounded-t-xl p-2 border-t border-x border-neutral-600">
          <div className="bg-black rounded-lg overflow-hidden">
            {/* Camera - decorative */}
            <div 
              className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-700 z-10" 
              aria-hidden="true" 
            />

            {/* Display */}
            <div className="w-80 h-48 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center relative">
              <Image
                src={src}
                alt={alt || "Desktop screenshot"}
                fill
                sizes="320px"
                className="object-cover"
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <svg 
                    className="w-10 h-10 mx-auto text-neutral-600 mb-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs text-neutral-500">{alt || "Desktop"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard base - decorative */}
        <div className="bg-neutral-700 h-3 rounded-b-xl mx-4 border-x border-b border-neutral-600" aria-hidden="true" />
        <div className="bg-neutral-600 h-1 rounded-b mx-16" aria-hidden="true" />
      </div>
    </div>
  );
}

