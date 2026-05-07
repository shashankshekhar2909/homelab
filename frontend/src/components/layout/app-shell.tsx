'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavLink,
  SkipToContent,
} from '@carbon/react';
import { useState } from 'react';
import { SiteFooter } from '@/components/layout/site-footer';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/systems', label: 'Systems' },
  { href: '/ai-workflow', label: 'AI Workflow' },
  { href: '/how-i-build', label: 'How I Build' },
  { href: '/homelab', label: 'Homelab' },
  { href: '/build-guide', label: 'Build Guide' },
  { href: '/how-i-build-fast', label: 'Ship Fast' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/what-this-replaces', label: 'Replaces' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <SkipToContent />
      <Header aria-label="KnowMy Homelab">
        <HeaderMenuButton
          aria-label={open ? 'Close menu' : 'Open menu'}
          isActive={open}
          onClick={() => setOpen((v) => !v)}
        />
        <HeaderName prefix="KnowMy">Homelab</HeaderName>
        <HeaderNavigation aria-label="KnowMy Homelab">
          {nav.map((item) => (
            <HeaderMenuItem key={item.href} as={Link} href={item.href} isCurrentPage={pathname === item.href}>
              {item.label}
            </HeaderMenuItem>
          ))}
        </HeaderNavigation>
        <SideNav aria-label="Side navigation" expanded={open} isPersistent={false} onOverlayClick={() => setOpen(false)}>
          <SideNavItems>
            {nav.map((item) => (
              <SideNavLink key={item.href} as={Link} href={item.href} isActive={pathname === item.href}>
                {item.label}
              </SideNavLink>
            ))}
          </SideNavItems>
        </SideNav>
      </Header>
      <Content id="main-content" className="app-content">{children}</Content>
      <SiteFooter />
    </>
  );
}
