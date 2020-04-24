import { Reducer, AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Payee } from '../common/banking-types';
import { SortDirection } from './payees-context';
import { ColumnConfig } from '../common/DataGrid';
import dao from './payees-dao';

// The "ducks" pattern

export type PayeesReduxState = {
  payees: Payee[];
  sortField: string;
  sortDirection: SortDirection;
  columns: ColumnConfig[];
};

export const initialState: PayeesReduxState = {
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

const reducer: Reducer<PayeesReduxState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_PAYEES': {
      let sortDirection: SortDirection = 'asc';
      if (state.sortField === action.payload.sortField && state.sortDirection === 'asc') {
        sortDirection = 'desc';
      }
      state.columns.forEach((column) => {
        if (column.field === action.sortField) {
          column.sortIndicator = sortDirection === 'asc' ? '⏫' : '⏬';
        } else {
          column.sortIndicator = '';
        }
      });
      return { ...state, sortField: action.payload.sortField, sortDirection };
    }
    case 'FETCH_PAYEES_START':
    case ' FETCH_PAYEES_ERROR':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case 'FETCH_PAYEES_SUCCESS':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        payees: action.payload.payees,
      };

    case 'REFRESH_PAYEES': {
      return { ...state, payees: action.payload.payees };
    }
    default:
      return state;
  }
};

function fetchPayeesStart() {
  return {
    type: 'FETCH_PAYEES_START',
    payload: {
      isLoading: true,
      error: null,
    },
  };
}

function fetchPayeesSuccess(payees: Payee[]) {
  return {
    type: 'FETCH_PAYEES_SUCCESS',
    payload: {
      payees,
      isLoading: false,
    },
  };
}

function fetchPayeesError(error: any) {
  return {
    type: 'FETCH_PAYEES_ERROR',
    payload: {
      error,
      isLoading: false,
    },
  };
}

function fetchPayees() {
  return function (dispatch: Dispatch) {
    dispatch(fetchPayeesStart());
    dao
      .getPayees()
      .then((payees) => dispatch(fetchPayeesSuccess(payees)))
      .catch((error) => dispatch(fetchPayeesError(error)));
  };
}

function sortPayees(sortField: string) {
  return {
    type: 'SORT_PAYEES',
    payload: {
      sortField,
    },
  };
}

function refreshPayees(payees: Payee[]) {
  return {
    type: 'REFRESH_PAYEES',
    payload: {
      payees,
    },
  };
}

export { reducer, sortPayees, refreshPayees, fetchPayees };
