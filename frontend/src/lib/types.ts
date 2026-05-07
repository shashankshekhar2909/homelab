export type ServiceStatus = 'online' | 'offline' | 'warning' | 'unknown';
export type ExposureType = 'lan_only' | 'tailscale' | 'cloudflare_tunnel' | 'public' | 'unknown';

export type Service = {
  id: string;
  name: string;
  category: string;
  internal_url?: string;
  external_url?: string;
  status: ServiceStatus;
  exposure: ExposureType;
  importance: 'low' | 'medium' | 'high' | 'critical';
};

export type Node = {
  id: string;
  name: string;
  type: string;
  ip_address?: string;
  os?: string;
};

export type Workload = {
  id: string;
  node_id: string;
  name: string;
  type: string;
  status?: string;
};

export type ApiEnvelope<T> = {
  success: boolean;
  data: T;
  meta: Record<string, unknown>;
};
