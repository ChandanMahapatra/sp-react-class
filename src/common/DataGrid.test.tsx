import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataGrid, { ColumnConfig } from './DataGrid';

let columns: ColumnConfig[];
let rows: any[];

beforeEach(() => {
  columns = [
    {
      field: 'firstName',
      label: 'First Name',
    },
    {
      field: 'lastName',
      label: 'Last Name',
    },
  ];

  rows = [
    {
      id: '1',
      firstName: 'Jenny',
      lastName: 'Sparks',
    },
    {
      id: '2',
      firstName: 'Lucas',
      lastName: 'Trent',
    },
  ];
});

test('Did a column render?', () => {
  const { getByText } = render(<DataGrid columns={columns} rows={[]} />);
  const header = getByText(columns[0].label);
  expect(header).toBeInTheDocument();
});

test('Did all columns render?', () => {
  const { getByText } = render(<DataGrid columns={columns} rows={[]} />);

  columns.forEach((column) => {
    // expect(() => getByText(column.label)).not.toThrow();
    getByText(column.label);
  });
});

test('Did the rows render', () => {
  const {getByText} = render(<DataGrid columns={columns} rows={rows} />);

  rows.forEach(row => {
    getByText(row.firstName);
    getByText(row.lastName);
  })

})
