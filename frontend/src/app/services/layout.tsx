import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Core homelab services grouped by purpose and role: Jellyfin, Immich, Samba, LiteLLM, and Ollama, a point-in-time overview rather than a live status feed.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
