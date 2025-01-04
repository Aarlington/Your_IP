import { useState } from 'react';
import { Search } from 'lucide-react';
import type { WhoisResult } from '../types';

const WhoisLookup = () => {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<WhoisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;

    setLoading(true);
    try {
      const response = await fetch(`https://whois.freeaiapi.xyz/?domain=${domain}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ domain, error: 'Failed to fetch WHOIS information' });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full">
      <div className="flex items-center gap-3 mb-4">
        <Search className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">WHOIS Lookup</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain name..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {result && (
        <div className="bg-gray-900/50 rounded-lg p-4">
          {result.error ? (
            <p className="text-red-400">{result.error}</p>
          ) : (
            <div className="space-y-2">
              <p><span className="text-gray-400">Domain:</span> {result.domain}</p>
              <p><span className="text-gray-400">Registrar:</span> {result.registrar || 'N/A'}</p>
              <p><span className="text-gray-400">Creation Date:</span> {result.creationDate || 'N/A'}</p>
              <p><span className="text-gray-400">Expiry Date:</span> {result.expiryDate || 'N/A'}</p>
              {result.nameServers && (
                <div>
                  <span className="text-gray-400">Name Servers:</span>
                  <ul className="list-disc list-inside pl-4">
                    {result.nameServers.map((ns, i) => (
                      <li key={i}>{ns}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WhoisLookup;