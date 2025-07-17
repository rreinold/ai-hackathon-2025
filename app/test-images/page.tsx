import Image from "next/image";

export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Next.js Logo</h2>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            unoptimized
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">File Icon</h2>
          <Image
            src="/file.svg"
            alt="File icon"
            width={32}
            height={32}
            unoptimized
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Window Icon</h2>
          <Image
            src="/window.svg"
            alt="Window icon"
            width={32}
            height={32}
            unoptimized
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Globe Icon</h2>
          <Image
            src="/globe.svg"
            alt="Globe icon"
            width={32}
            height={32}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
} 