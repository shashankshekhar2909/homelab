import { Tag } from '@carbon/react';
import type { ExposureType } from '@/lib/types';

const map: Record<ExposureType, 'blue' | 'cyan' | 'purple' | 'magenta' | 'gray'> = {
  lan_only: 'blue',
  tailscale: 'cyan',
  cloudflare_tunnel: 'purple',
  public: 'magenta',
  unknown: 'gray',
};

export function ExposureTag({ exposure }: { exposure: ExposureType }) {
  return <Tag type={map[exposure]}>{exposure}</Tag>;
}
