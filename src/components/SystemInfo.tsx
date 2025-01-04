import { Monitor } from 'lucide-react';
import { getSystemInfo } from '../utils/systemInfo';

const SystemInfo = () => {
  const systemInfo = getSystemInfo();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full">
      <div className="flex items-center gap-3 mb-4">
        <Monitor className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">System Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p>
            <span className="text-gray-400">Operating System:</span>{' '}
            <span className="font-medium">{systemInfo.os}</span>
          </p>
          <p>
            <span className="text-gray-400">CPU Architecture:</span>{' '}
            <span className="font-medium">{systemInfo.cpu}</span>
          </p>
          <p>
            <span className="text-gray-400">CPU Cores:</span>{' '}
            <span className="font-medium">{systemInfo.cores}</span>
          </p>
          <p>
            <span className="text-gray-400">Memory:</span>{' '}
            <span className="font-medium">{systemInfo.memory}</span>
          </p>
        </div>
        <div className="space-y-2">
          <p>
            <span className="text-gray-400">Screen Resolution:</span>{' '}
            <span className="font-medium">{systemInfo.resolution}</span>
          </p>
          <p>
            <span className="text-gray-400">Color Depth:</span>{' '}
            <span className="font-medium">{systemInfo.colorDepth}-bit</span>
          </p>
          <p>
            <span className="text-gray-400">Language:</span>{' '}
            <span className="font-medium">{systemInfo.language}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;