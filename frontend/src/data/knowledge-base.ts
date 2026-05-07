export const homeIntro = {
  title: 'Understand my homelab. Build your own.',
  text: 'KnowMyLab is a static, safe learning platform that explains homelab architecture and how to replicate it step-by-step.',
};

export const architectureFlow = [
  'User Laptop',
  'Development Tools',
  'AI Tools (Local + Cloud)',
  'Homelab Server',
  'Proxmox',
  'Docker / VMs / LXCs',
  'Services',
];

export const services = [
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    category: 'Media',
    description: 'Self-hosted media server for local streaming.',
    runs_on: 'Docker container',
    tech_stack: 'Docker, Jellyfin',
    access_type: 'LAN only',
    status: 'online',
  },
  {
    id: 'samba',
    name: 'Samba (SMB)',
    category: 'Storage',
    description: 'File sharing across devices.',
    runs_on: 'VM or container',
    tech_stack: 'SMB',
    access_type: 'LAN only',
    status: 'online',
  },
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'AI',
    description: 'Local LLM runtime for private AI workflows.',
    runs_on: 'LXC/VM',
    tech_stack: 'Ollama',
    access_type: 'LAN only',
    status: 'online',
  },
];

export const buildSteps = [
  'Hardware',
  'Install Proxmox',
  'Create VM or LXC',
  'Install Docker',
  'Add Storage',
  'Install First Service',
  'Add Networking',
  'Add Remote Access',
  'Add AI',
  'Document Everything',
];

export const templates = [
  { id: 'starter', name: 'Starter Homelab', difficulty: 'beginner', eta: '4-6 hours' },
  { id: 'media', name: 'Media Server Lab', difficulty: 'beginner', eta: '3-5 hours' },
  { id: 'ai', name: 'AI Lab', difficulty: 'intermediate', eta: '3-6 hours' },
];

export const myLabTracker = [
  { id: '1', service: 'Jellyfin', ip: '192.168.x.x', port: '8096', status: 'installed' },
  { id: '2', service: 'Ollama', ip: '192.168.x.x', port: '11434', status: 'installed' },
  { id: '3', service: 'Cloudflare Tunnel', ip: '192.168.x.x', port: '-', status: 'pending' },
];

export const quickCopyPath = [
  'Get any mini PC',
  'Install Proxmox',
  'Create one LXC',
  'Install Docker',
  'Run your first app',
  'Add LiteLLM (optional)',
];
