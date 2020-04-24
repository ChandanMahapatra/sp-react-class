import React, { Dispatch } from 'react';
// import { HasId } from './banking-types';
import * as lodash from 'lodash';

export type SortIndicator = '⏫' | '⏬' | '';

export type DataGridAction = {
  type: string;
  [key: string]: any;
};

export type ColumnConfig = {
  field: string;
  label: string;
  sortIndicator: SortIndicator;
};

export type DataGridState = {
  rows: any[];
  columns: ColumnConfig[];
};

type DataGridProps<S extends DataGridState> = {
  state: S;
  dispatch: Dispatch<DataGridAction>;
};

function DataGrid<S extends DataGridState>({
  state: { columns, rows },
  dispatch,
}: DataGridProps<S>) {
  function handleColumnSelect(field: string) {
    dispatch({
      type: 'sort',
      field
    })
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field} onClick={() => handleColumnSelect(column.field)}>
              {column.label}
              <span>{column.sortIndicator}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          // TODO: Replace index with a better key
          <tr key={index}>
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
