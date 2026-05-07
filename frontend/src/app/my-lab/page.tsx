'use client';

import { DataTable, Grid, Column, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tile } from '@carbon/react';
import { myLabTracker } from '@/data/knowledge-base';

export default function MyLabPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <h1 className="page-title">My Lab Tracker</h1>
        <p className="page-subtitle">Track installed services, status, and operational notes.</p>
      </Column>
      <Column sm={4} md={8} lg={16}>
        <Tile className="section-tile">
          <DataTable rows={myLabTracker} headers={[
            { key: 'service', header: 'Service' },
            { key: 'ip', header: 'IP' },
            { key: 'port', header: 'Port' },
            { key: 'status', header: 'Status' },
          ]}>
            {({ rows, headers, getHeaderProps, getRowProps }) => (
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => {
                      const { key, ...rest } = getHeaderProps({ header });
                      return <TableHeader key={key} {...rest}>{header.header}</TableHeader>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    const { key, ...rest } = getRowProps({ row });
                    return <TableRow key={key} {...rest}>{row.cells.map((c) => <TableCell key={c.id}>{String(c.value)}</TableCell>)}</TableRow>;
                  })}
                </TableBody>
              </Table>
            )}
          </DataTable>
        </Tile>
      </Column>
    </Grid>
  );
}
