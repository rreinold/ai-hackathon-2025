const baseUrl = '/ai-hackathon-2025';

export default function DebugPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Image Debug Page</h1>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Testing different image paths:</h2>
        
        <div className="border p-4 rounded">
          <h3 className="font-medium mb-2">1. Relative path (current):</h3>
          <img src={`${baseUrl}/next.svg`} alt="Next.js logo" width={180} height={38} />
          <p className="text-sm text-gray-600 mt-1">Path: {`${baseUrl}/next.svg`}</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-medium mb-2">2. With basePath (redundant):</h3>
          <img src={`${baseUrl}/next.svg`} alt="Next.js logo" width={180} height={38} />
          <p className="text-sm text-gray-600 mt-1">Path: {`${baseUrl}/next.svg`}</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-medium mb-2">3. Absolute path:</h3>
          <img src="https://raw.githubusercontent.com/[username]/ai-hackathon-2025/main/public/next.svg" alt="Next.js logo" width={180} height={38} />
          <p className="text-sm text-gray-600 mt-1">Path: Raw GitHub URL</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-medium mb-2">4. Other images:</h3>
          <div className="flex gap-4">
            <img src={`${baseUrl}/file.svg`} alt="File icon" width={32} height={32} />
            <img src={`${baseUrl}/window.svg`} alt="Window icon" width={32} height={32} />
            <img src={`${baseUrl}/globe.svg`} alt="Globe icon" width={32} height={32} />
          </div>
          <p className="text-sm text-gray-600 mt-1">Paths: {`${baseUrl}/file.svg`}, {`${baseUrl}/window.svg`}, {`${baseUrl}/globe.svg`}</p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-medium mb-2">Current Configuration:</h3>
        <pre className="text-sm">
{`next.config.ts:
- output: 'export'
- trailingSlash: true
- basePath: '/ai-hackathon-2025'
- No images config (using <img> tags)`}
        </pre>
      </div>
    </div>
  );
} 