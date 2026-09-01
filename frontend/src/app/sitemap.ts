import type { MetadataRoute } from 'next';
import { systems } from '@/data/systems';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homelab.buildwithshashank.com';

const routes = [
  '/',
  '/systems',
  '/ai-workflow',
  '/how-i-build',
  '/homelab',
  '/build-guide',
  '/how-i-build-fast',
  '/timeline',
  '/what-this-replaces',
  '/services',
  '/templates',
  '/my-lab',
  ...systems.map((s) => `/systems/${s.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
