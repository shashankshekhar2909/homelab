import type { Metadata } from 'next';
import { pageMetadata, siteUrl, jsonLdScript } from '@/lib/seo';
import { BuildGuideContent } from './content';

export const metadata: Metadata = pageMetadata({
  title: 'Build Guide',
  description:
    'A staged, safe guide to building your own homelab: foundation, application runtime, private and public connectivity, operations, and an optional AI layer.',
  path: '/build-guide',
});

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Build Guide', item: `${siteUrl}/build-guide` },
  ],
};

export default function BuildGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbJsonLd) }}
      />
      <BuildGuideContent />
    </>
  );
}
