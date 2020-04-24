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

export const initialState: PayeesContextStateType = {
  payees: [],
  sortField: '',
  sortDirection: 'asc',
  columns: [
    {
      field: 'payeeName',
      label: 'Payee Name',
      sortIndicator: '',
    },
    {
      field: 'address.city',
      label: 'City',
      sortIndicator: '',
    },
    {
      field: 'address.state',
      label: 'State',
      sortIndicator: '',
    },
  ],
};

export function payeesReducer(
  state: PayeesContextStateType,
  action: PayeeAction,
): PayeesContextStateType {
  switch (action.type) {
    case 'sort': {
      let sortDirection: SortDirection = 'asc';
      if (state.sortField === action.sortField && state.sortDirection === 'asc') {
        sortDirection = 'desc';
      }
      state.columns.forEach((column) => {
        if (column.field === action.sortField) {
          column.sortIndicator = sortDirection === 'asc' ? '⏫' : '⏬';
        } else {
          column.sortIndicator = '';
        }
      });
      return { ...state, sortField: action.sortField, sortDirection };
    }
    case 'payees': {
      return { ...state, payees: action.payees };
    }
    default:
      throw new Error('Could not understand type: ' + action.type);
  }
}

export default PayeesContext;
