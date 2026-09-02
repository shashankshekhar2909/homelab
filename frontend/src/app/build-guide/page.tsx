import type { Metadata } from 'next';
import { BuildGuideContent } from './content';

export const metadata: Metadata = {
  title: 'Build Guide',
  description:
    'A staged, safe guide to building your own homelab: foundation, application runtime, private and public connectivity, operations, and an optional AI layer.',
  alternates: {
    canonical: '/build-guide',
  },
  openGraph: {
    title: 'Build Guide | KnowMy Homelab',
    description: 'A staged path from one machine to a small, reliable multi-node homelab, written for beginners through production.',
    url: '/build-guide',
  },
  twitter: {
    title: 'Build Guide | KnowMy Homelab',
    description: 'A staged path from one machine to a small, reliable multi-node homelab, written for beginners through production.',
  },
};

export default function BuildGuidePage() {
  return <BuildGuideContent />;
}
