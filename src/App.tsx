import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import IPDisplay from './components/IPDisplay';
import WhoisLookup from './components/WhoisLookup';
import LatencyTest from './components/LatencyTest';
import SystemInfo from './components/SystemInfo';
import BrowserInfo from './components/BrowserInfo';
import { Network } from 'lucide-react';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen text-gray-100 p-6">
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Network className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold">Network Tools</h1>
          </div>
          <p className="text-gray-400">Analyze your network with our comprehensive suite of tools</p>
        </header>

        <main className="max-w-4xl mx-auto space-y-6">
          <IPDisplay />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SystemInfo />
            <BrowserInfo />
          </div>
          <WhoisLookup />
          <LatencyTest />
        </main>

        <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Network Tools. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;