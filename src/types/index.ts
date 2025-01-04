export interface LatencyResult {
  location: string;
  latency: number;
  status: 'success' | 'error';
}

export interface WhoisResult {
  domain: string;
  registrar?: string;
  creationDate?: string;
  expiryDate?: string;
  nameServers?: string[];
  error?: string;
}