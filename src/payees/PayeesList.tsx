import React from 'react';
import DataGrid, { ColumnConfig } from '../common/DataGrid';
import { Payee } from '../common/banking-types';

const columns: ColumnConfig[] = [
  {
    field: 'payeeName',
    label: 'Payee Name',
  },
  {
    field: 'address.city',
    label: 'City',
  },
  {
    field: 'address.state',
    label: 'State',
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
