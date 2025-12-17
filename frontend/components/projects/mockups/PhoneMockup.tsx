import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt?: string;
}

export function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="flex justify-center items-center p-6">
      {/* Phone Frame */}
      <div className="relative" role="img" aria-label={alt || "Phone mockup"}>
        {/* Phone body */}
        <div className="relative bg-neutral-800 rounded-[3rem] p-2 shadow-2xl border border-neutral-600">
          {/* Phone inner bezel */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
            {/* Screen */}
            <div className="w-48 h-[420px] bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center relative">
              <Image
                src={src}
                alt={alt || "Mobile screenshot"}
                fill
                sizes="192px"
                className="object-cover"
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <svg 
                    className="w-8 h-8 mx-auto text-neutral-600 mb-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs text-neutral-500">{alt || "Mobile"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons - decorative */}
        <div className="absolute -left-1 top-24 w-1 h-8 bg-neutral-700 rounded-l" aria-hidden="true" />
        <div className="absolute -left-1 top-36 w-1 h-12 bg-neutral-700 rounded-l" aria-hidden="true" />
        <div className="absolute -left-1 top-52 w-1 h-12 bg-neutral-700 rounded-l" aria-hidden="true" />
        <div className="absolute -right-1 top-32 w-1 h-16 bg-neutral-700 rounded-r" aria-hidden="true" />
      </div>
    </div>
  );
}

