import React, { useEffect, useState } from 'react';
import dao from './payees-dao';
import PayeesList from './PayeesList';
import { Payee } from '../common/banking-types';

function PayeesListFetch() {
  const [payees, setPayees] = useState<Payee[]>([]);

  useEffect(() => {
    dao.getPayees().then(payees => setPayees(payees));
  }, []);
  
  return <PayeesList payees={payees}/>;
}

export default PayeesListFetch;
