import '@carbon/styles/css/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { AppShell } from '@/components/layout/app-shell';
import { siteUrl, siteName, ogImagePath, jsonLdScript } from '@/lib/seo';

const homeTitle = 'KnowMy Homelab - Real systems, documented';
const homeDescription =
  'A working homelab documented like a system, not a status page: Proxmox, Docker, an LLM gateway, and the deployment discipline behind it, with a guide to build your own.';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: homeDescription,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shashank Shekhar',
  url: 'https://buildwithshashank.com',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: '%s | KnowMy Homelab',
  },
  description: homeDescription,
  applicationName: 'KnowMy Homelab',
  keywords: [
    'homelab',
    'proxmox',
    'docker',
    'self-hosted',
    'litellm',
    'ai workflow',
    'system design',
    'BuildWithShashank',
  ],
  authors: [{ name: 'Shashank Shekhar', url: 'https://buildwithshashank.com' }],
  creator: 'Shashank Shekhar',
  publisher: 'Shashank Shekhar',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: homeTitle,
    description: 'A working homelab documented like a system: architecture, decisions, and a path to build your own.',
    siteName,
    images: [{ url: ogImagePath, width: 1200, height: 630, alt: homeTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: 'A working homelab documented like a system: architecture, decisions, and a path to build your own.',
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(personJsonLd) }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-58WY9XVSQF" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-58WY9XVSQF');`}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
