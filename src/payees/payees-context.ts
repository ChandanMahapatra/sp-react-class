import React from 'react';
import { Payee } from '../common/banking-types';

export type SortDirection = 'asc' | 'desc';

export type PayeesContextType = {
  payees: Payee[];
  sortField: string;
  sortDirection: SortDirection;
  setPayees: (payees: Payee[]) => void;
};

const PayeesContext = React.createContext<PayeesContextType>({
  payees: [],
  sortField: '',
  sortDirection: 'asc',
  setPayees: () => {}
});

export default PayeesContext;
