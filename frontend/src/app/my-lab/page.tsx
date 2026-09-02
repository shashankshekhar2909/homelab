'use client';

import { DataTable, Grid, Column, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tile } from '@carbon/react';
import { myLabChecklist } from '@/data/knowledge-base';

export default function MyLabPage() {
  return (
    <Grid fullWidth className="page-grid">
      <Column sm={4} md={8} lg={16}>
        <span className="eyebrow">Template</span>
        <h1 className="page-title">My Lab Checklist</h1>
        <p className="page-subtitle">
          A copyable checklist mirroring the build guide, in the order it actually gets built. Track your own
          progress against it; this is a template, not a record of anyone&apos;s live infrastructure.
        </p>
      </Column>

      <Column sm={4} md={8} lg={16}>
        <div className="my-lab-table-wrap">
          <Tile className="section-tile">
            <DataTable rows={myLabChecklist} headers={[
              { key: 'item', header: 'Component' },
              { key: 'category', header: 'Category' },
              { key: 'note', header: 'Note' },
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
        </div>

        <div className="my-lab-cards">
          {myLabChecklist.map((row) => (
            <div className="my-lab-card" key={row.id}>
              <p className="my-lab-card-title">{row.item}</p>
              <dl style={{ margin: 0 }}>
                <div className="my-lab-card-row">
                  <dt>Category</dt>
                  <dd>{row.category}</dd>
                </div>
                <div className="my-lab-card-row">
                  <dt>Note</dt>
                  <dd>{row.note}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Column>
    </Grid>
  );
}
