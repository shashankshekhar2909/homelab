'use client';

import { Column, Grid, Tile } from '@carbon/react';
import { SecurityNote } from '@/components/common/security-note';

export default function HomelabPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">My Homelab in Daily Life</h1>
        <p className="page-subtitle">How infrastructure supports storage, media, development, and AI workflows day-to-day.</p>
      </Column>
      <Column sm={4} md={8} lg={16}><SecurityNote /></Column>

      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">Core System</h3><p>Mini PC server running Proxmox with lightweight PCT containers and Docker workloads.</p></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Storage & Files</h3><p>Samba provides shared access for media, backups, and projects.</p></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">Media & Photos</h3><p>Jellyfin for media streaming and Immich for private photo backup.</p></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">AI & Development</h3><p>Ollama + web UI for local AI tests and project support.</p></Tile></Column>
      <Column sm={4} md={4} lg={8}><Tile className="section-tile"><h3 className="section-heading">System Management</h3><p>Docker and management tools keep services organized and controllable.</p></Tile></Column>
      <Column sm={4} md={8} lg={16}><Tile className="section-tile"><h3 className="section-heading">Daily Flow</h3><pre className="flow-block">{`Morning: check services + file access
Work: code on laptop, run apps on homelab
Evening: media + photo backup`}</pre></Tile></Column>
    </Grid>
  );
}
