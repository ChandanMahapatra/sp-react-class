import React from 'react';
import { HasId } from './banking-types';
import * as lodash from 'lodash';

export type ColumnConfig = {
  field: string;
  label: string;
};

type DataGridProps<T> = {
  columns: ColumnConfig[];
  rows: T[];
};

function DataGrid<T extends HasId>({ columns, rows }: DataGridProps<T>) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.field}>{lodash.get(row, column.field)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataGrid;
