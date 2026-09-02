import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'My Lab Checklist',
  description:
    'A copyable homelab build checklist mirroring the build guide, in the order it actually gets built: core components first, then optional and advanced additions.',
  path: '/my-lab',
});

export default function MyLabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
