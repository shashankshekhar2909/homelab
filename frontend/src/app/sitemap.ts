import type { MetadataRoute } from 'next';
import { systems } from '@/data/systems';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homelab.buildwithshashank.com';

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/systems', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/build-guide', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/homelab', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ai-workflow', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/how-i-build', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/how-i-build-fast', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/timeline', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/what-this-replaces', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/templates', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/my-lab', changeFrequency: 'monthly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency,
      priority,
    })),
    ...systems.map((s) => ({
      url: `${siteUrl}/systems/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
