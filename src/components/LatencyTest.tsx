import { useState } from 'react';
import { Activity } from 'lucide-react';
import type { LatencyResult } from '../types';

const LOCATIONS = [
  { name: 'US East (N. Virginia)', url: 'https://dynamodb.us-east-1.amazonaws.com' },
  { name: 'Europe (London)', url: 'https://dynamodb.eu-west-2.amazonaws.com' },
  { name: 'Asia Pacific (Tokyo)', url: 'https://dynamodb.ap-northeast-1.amazonaws.com' },
  { name: 'South America (São Paulo)', url: 'https://dynamodb.sa-east-1.amazonaws.com' }
];

const LatencyTest = () => {
  const [results, setResults] = useState<LatencyResult[]>([]);
  const [testing, setTesting] = useState(false);

  const testLatency = async () => {
    setTesting(true);
    setResults([]);

    const testLocation = async (location: string, url: string) => {
      const start = performance.now();
      try {
        await fetch(url, { mode: 'no-cors' });
        const latency = Math.round(performance.now() - start);
        return { location, latency, status: 'success' as const };
      } catch {
        return { location, latency: 0, status: 'error' as const };
      }
    };

    const newResults = await Promise.all(
      LOCATIONS.map(loc => testLocation(loc.name, loc.url))
    );

    setResults(newResults);
    setTesting(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full">
      <div className="flex items-center gap-3 mb-4">
        <Activity className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Latency Test</h2>
      </div>

      <button
        onClick={testLatency}
        disabled={testing}
        className="w-full px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium disabled:opacity-50 mb-4"
      >
        {testing ? 'Testing...' : 'Start Test'}
      </button>

      <div className="grid gap-3">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-gray-900/50 rounded-lg p-4 flex justify-between items-center"
          >
            <span>{result.location}</span>
            {result.status === 'success' ? (
              <span className="font-mono text-green-400">{result.latency}ms</span>
            ) : (
              <span className="text-red-400">Failed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatencyTest;