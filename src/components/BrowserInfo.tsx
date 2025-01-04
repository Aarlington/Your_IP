import { Chrome } from 'lucide-react';
import { getBrowserInfo } from '../utils/systemInfo';

const BrowserInfo = () => {
  const browserInfo = getBrowserInfo();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full">
      <div className="flex items-center gap-3 mb-4">
        <Chrome className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Browser Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400 mb-1">Browser</p>
          <p className="text-xl font-medium">{browserInfo.name}</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400 mb-1">Version</p>
          <p className="text-xl font-medium">{browserInfo.version}</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4">
          <p className="text-gray-400 mb-1">Engine</p>
          <p className="text-xl font-medium">{browserInfo.engine}</p>
        </div>
      </div>
    </div>
  );
};

export default BrowserInfo;