import React from 'react';
import DataGrid, { ColumnConfig } from '../common/DataGrid';
import { Payee } from '../common/banking-types';

const columns: ColumnConfig[] = [
  {
    field: 'payeeName',
    label: 'Payee Name',
    sortIndicator: ''
  },
  {
    field: 'address.city',
    label: 'City',
    sortIndicator: ''
  },
  {
    field: 'address.state',
    label: 'State',
    sortIndicator: ''
  },
];

type PayeesListProps = {
  payees: Payee[];
  selectHeader?: (field: string) => void;
};

function PayeesList({ payees, selectHeader }: PayeesListProps) {
  return <DataGrid columns={columns} rows={payees} selectHeader={selectHeader} />;
}

export default PayeesList;
