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
          background: '#211d16',
          padding: '72px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 22, height: 2, background: '#d69752' }} />
          <div style={{ color: '#d69752', fontSize: 22, letterSpacing: 4, textTransform: 'uppercase' }}>
            BuildWithShashank
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ color: '#f1ead9', fontSize: 66, fontWeight: 700, lineHeight: 1.12, letterSpacing: -2 }}>
            KnowMy Homelab
          </div>
          <div style={{ color: '#b9ab8b', fontSize: 28, maxWidth: 900, lineHeight: 1.4 }}>
            A working homelab documented like a system: Proxmox, Docker, an LLM gateway, and the path to build your own.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, color: '#b9ab8b', fontSize: 20 }}>
          <div>Proxmox</div>
          <div style={{ color: '#3c3423' }}>/</div>
          <div>Docker</div>
          <div style={{ color: '#3c3423' }}>/</div>
          <div>LiteLLM</div>
          <div style={{ color: '#3c3423' }}>/</div>
          <div>Cloudflare Tunnel</div>
          <div style={{ color: '#3c3423' }}>/</div>
          <div>Tailscale</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
