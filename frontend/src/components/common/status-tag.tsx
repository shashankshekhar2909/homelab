import { Tag } from '@carbon/react';
import type { ServiceStatus } from '@/lib/types';

const map: Record<ServiceStatus, 'green' | 'red' | 'magenta' | 'gray'> = {
  online: 'green',
  offline: 'red',
  warning: 'magenta',
  unknown: 'gray',
};

export function StatusTag({ status }: { status: ServiceStatus }) {
  return <Tag type={map[status]}>{status}</Tag>;
}
