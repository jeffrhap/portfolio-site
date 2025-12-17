import Image from "next/image";

interface MiniPhoneMockupProps {
  src: string;
  alt?: string;
}

export function MiniPhoneMockup({ src, alt }: MiniPhoneMockupProps) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative scale-[0.38] origin-center" role="img" aria-label={alt || "Phone mockup"}>
        {/* Phone body */}
        <div className="relative bg-neutral-800 rounded-[3rem] p-2 shadow-2xl border border-neutral-600">
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

