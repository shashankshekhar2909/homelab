export const services = [
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    category: 'Media',
    description: 'Self-hosted media server streaming from local storage.',
    runs_on: 'Proxmox host',
    tech_stack: 'Docker, Jellyfin',
  },
  {
    id: 'immich',
    name: 'Immich',
    category: 'Photos',
    description: 'Self-hosted photo backup and search, synced automatically from phone.',
    runs_on: 'Proxmox host',
    tech_stack: 'Docker, Immich',
  },
  {
    id: 'samba',
    name: 'Samba (SMB)',
    category: 'Storage',
    description: 'File sharing across laptop, phone, and other devices on the network.',
    runs_on: 'Proxmox host',
    tech_stack: 'SMB',
  },
  {
    id: 'litellm',
    name: 'LiteLLM',
    category: 'AI',
    description: 'Unified gateway that routes AI tooling to OpenAI, Anthropic, Groq, and other providers.',
    runs_on: 'ASUS Linux node',
    tech_stack: 'LiteLLM',
  },
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'AI',
    description: 'Local LLM runtime for quick, private, offline-friendly tasks.',
    runs_on: 'ASUS Linux node',
    tech_stack: 'Ollama',
  },
];

export const templates = [
  { id: 'starter', name: 'Starter Homelab', difficulty: 'beginner', eta: '4-6 hours' },
  { id: 'media', name: 'Media Server Lab', difficulty: 'beginner', eta: '3-5 hours' },
  { id: 'ai', name: 'AI Lab', difficulty: 'intermediate', eta: '3-6 hours' },
];

export const myLabChecklist = [
  { id: '1', item: 'Host + Proxmox', category: 'Core', note: 'One machine, virtualization layer installed.' },
  { id: '2', item: 'First LXC container', category: 'Core', note: 'Isolated environment for your first service.' },
  { id: '3', item: 'Docker inside the container', category: 'Core', note: 'Consistent, repeatable app runtime.' },
  { id: '4', item: 'Storage share (Samba)', category: 'Core', note: 'One place for files across devices.' },
  { id: '5', item: 'First service (Jellyfin or similar)', category: 'Core', note: 'Validates the stack end to end.' },
  { id: '6', item: 'Remote access (tunnel or VPN)', category: 'Optional', note: 'Outbound-only: Cloudflare Tunnel for public, Tailscale for private.' },
  { id: '7', item: 'Local or gateway-routed AI', category: 'Optional', note: 'Ollama locally, LiteLLM if routing multiple providers.' },
  { id: '8', item: 'Second node', category: 'Advanced', note: 'Split build/deploy and AI workloads across separate machines once one node feels crowded.' },
];

export const quickCopyPath = [
  'Get any mini PC',
  'Install Proxmox',
  'Create one LXC',
  'Install Docker',
  'Run your first app',
  'Add LiteLLM (optional)',
];
