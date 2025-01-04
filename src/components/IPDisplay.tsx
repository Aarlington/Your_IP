import { useEffect, useState } from 'react';
import { Globe2 } from 'lucide-react';
import CopyButton from './CopyButton';

const IPDisplay = () => {
  const [ip, setIP] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        setIP(data.ip);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full">
      <div className="flex items-center gap-3 mb-4">
        <Globe2 className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-semibold">Your IP</h3>
      </div>
      <div className="text-3xl font-mono text-center p-4 bg-gray-900/50 rounded-lg flex items-center justify-center gap-3">
        {loading ? (
          <div className="animate-pulse h-8 bg-gray-700/50 rounded" />
        ) : (
          <>
            <span>{ip || 'Unable to fetch IP'}</span>
            {ip && <CopyButton text={ip} />}
          </>
        )}
      </div>
    </div>
  );
};

export default IPDisplay;