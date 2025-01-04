export const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  const browserData = {
    name: 'Unknown',
    version: 'Unknown',
    engine: 'Unknown',
  };

  // Browser detection
  if (ua.includes('Firefox/')) {
    browserData.name = 'Firefox';
    browserData.engine = 'Gecko';
    browserData.version = ua.split('Firefox/')[1];
  } else if (ua.includes('Chrome/')) {
    browserData.name = 'Chrome';
    browserData.engine = 'Blink';
    browserData.version = ua.split('Chrome/')[1].split(' ')[0];
  } else if (ua.includes('Safari/') && !ua.includes('Chrome')) {
    browserData.name = 'Safari';
    browserData.engine = 'WebKit';
    browserData.version = ua.split('Version/')[1]?.split(' ')[0] || 'Unknown';
  } else if (ua.includes('Edg/')) {
    browserData.name = 'Edge';
    browserData.engine = 'Blink';
    browserData.version = ua.split('Edg/')[1];
  }

  return browserData;
};

export const getSystemInfo = () => {
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  
  return {
    os: getOS(ua, platform),
    cpu: getCPUArchitecture(ua, platform),
    memory: getTotalMemory(),
    cores: navigator.hardwareConcurrency || 'Unknown',
    language: navigator.language,
    colorDepth: window.screen.colorDepth,
    resolution: `${window.screen.width}x${window.screen.height}`,
  };
};

const getOS = (ua: string, platform: string): string => {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS')) return 'iOS';
  return platform;
};

const getCPUArchitecture = (ua: string, platform: string): string => {
  if (ua.includes('x64') || ua.includes('x86_64') || platform.includes('64')) return 'x64';
  if (ua.includes('x86') || platform.includes('86')) return 'x86';
  if (ua.includes('arm') || platform.includes('arm')) return 'ARM';
  return 'Unknown';
};

const getTotalMemory = (): string => {
  if ('deviceMemory' in navigator) {
    return `${(navigator as any).deviceMemory}GB`;
  }
  return 'Unknown';
};