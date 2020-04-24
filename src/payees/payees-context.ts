import React, { Dispatch } from 'react';
import { Payee } from '../common/banking-types';
import { ColumnConfig } from '../common/DataGrid';

export type PayeeAction = {
  type: string;
  [key: string]: any;
};

export type SortDirection = 'asc' | 'desc';

export type PayeesContextStateType = {
  payees: Payee[];
  sortField: string;
  sortDirection: SortDirection;
  columns: ColumnConfig[];
};

export type PayeesContextType = {
  state: PayeesContextStateType;
  // dispatch: Dispatch<PayeeAction>;
  dispatch: Dispatch<PayeeAction> | any;
};

const PayeesContext = React.createContext<PayeesContextType>({
  state: {
    payees: [],
    sortField: '',
    sortDirection: 'asc',
    columns: [],
  },

  dispatch: null,
});

export default PayeesContext;
