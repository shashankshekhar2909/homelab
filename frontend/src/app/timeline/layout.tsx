import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Evolution Timeline',
  description:
    'How this homelab setup matured from a handful of unisolated apps to a container-per-project pattern with structured AI-native workflows across multiple nodes.',
  path: '/timeline',
});

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
