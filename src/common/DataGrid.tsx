import React from 'react';

export type ColumnConfig = {
  field: string;
  label: string;
};

type DataGridProps<T> = {
  columns: ColumnConfig[];
  rows?: T[];
};

function DataGrid<T>({ columns, rows }: DataGridProps<T>) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default DataGrid;
