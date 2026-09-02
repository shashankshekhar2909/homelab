import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'My Homelab',
  description:
    'A point-in-time overview of the homelab nodes, connectivity, and platform components: Proxmox, Docker, LiteLLM, Tailscale, and Cloudflare Tunnel, by role and data flow.',
  path: '/homelab',
});

export default function HomelabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
