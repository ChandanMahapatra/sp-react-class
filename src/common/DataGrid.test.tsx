import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataGrid, { ColumnConfig } from './DataGrid';

let columns: ColumnConfig[];

beforeEach(() => {
  columns = [
    {
      field: 'foo',
      label: 'Foo',
    },
    {
      field: 'bar',
      label: 'Bar',
    },
  ];
});

test('Did a column render?', () => {
  const { getByText } = render(<DataGrid columns={columns} />);
  const header = getByText(columns[0].label);
  expect(header).toBeInTheDocument();
});

test('Did all columns render?', () => {
  const { getByText } = render(<DataGrid columns={columns} />);

  columns.forEach((column) => {
    // expect(() => getByText(column.label)).not.toThrow();
    getByText(column.label);
  });
});
