import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'svc-jellyfin',
    name: 'Jellyfin',
    category: 'media',
    internal_url: 'http://jellyfin.example.local',
    status: 'online',
    exposure: 'lan_only',
    importance: 'medium',
  },
  {
    id: 'svc-open-webui',
    name: 'Open WebUI',
    category: 'ai',
    internal_url: 'http://openwebui.example.local',
    external_url: 'https://app.example.com',
    status: 'warning',
    exposure: 'cloudflare_tunnel',
    importance: 'high',
  },
];
