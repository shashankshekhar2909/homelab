import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f8f8fa',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: '#059669' }} />
          <div style={{ color: '#047857', fontSize: 20, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700 }}>
            BuildWithShashank
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ color: '#09090b', fontSize: 66, fontWeight: 800, lineHeight: 1.12, letterSpacing: -2 }}>
            KnowMy Homelab
          </div>
          <div style={{ color: '#4b5563', fontSize: 28, maxWidth: 900, lineHeight: 1.4 }}>
            A working homelab documented like a system: Proxmox, Docker, an LLM gateway, and the path to build your own.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, color: '#4b5563', fontSize: 20 }}>
          <div>Proxmox</div>
          <div style={{ color: '#d4d4d8' }}>/</div>
          <div>Docker</div>
          <div style={{ color: '#d4d4d8' }}>/</div>
          <div>LiteLLM</div>
          <div style={{ color: '#d4d4d8' }}>/</div>
          <div>Cloudflare Tunnel</div>
          <div style={{ color: '#d4d4d8' }}>/</div>
          <div>Tailscale</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
