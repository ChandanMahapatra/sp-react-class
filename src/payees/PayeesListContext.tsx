import React, { useContext } from 'react';
import * as lodash from 'lodash';
import PayeesContext, { SortDirection } from './payees-context';
import PayeesList from './PayeesList';

function PayeesListContext() {
  const context = useContext(PayeesContext);

  function handleSelectHeader(field: string) {
    let sortDirection: SortDirection = 'asc';
    if (field === context.sortField && context.sortDirection === 'asc') {
      sortDirection = 'desc';
    }

    context.sortDirection = sortDirection;
    context.sortField = field;
    context.setPayees(
      lodash.orderBy(context.payees, context.sortField, context.sortDirection),
    );
  }

  return <PayeesList payees={context.payees} selectHeader={handleSelectHeader} />;
}

export default PayeesListContext;
