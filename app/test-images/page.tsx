import Image from "next/image";

const baseUrl = '/ai-hackathon-2025';

export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Next.js Logo</h2>
          <img
            src={`${baseUrl}/next.svg`}
            alt="Next.js logo"
            width={180}
            height={38}
            style={{ display: 'block' }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">File Icon</h2>
          <img
            src={`${baseUrl}/file.svg`}
            alt="File icon"
            width={32}
            height={32}
            style={{ display: 'inline-block' }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Window Icon</h2>
          <img
            src={`${baseUrl}/window.svg`}
            alt="Window icon"
            width={32}
            height={32}
            style={{ display: 'inline-block' }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Globe Icon</h2>
          <img
            src={`${baseUrl}/globe.svg`}
            alt="Globe icon"
            width={32}
            height={32}
            style={{ display: 'inline-block' }}
          />
        </div>
      </div>
    </div>
  );
} 