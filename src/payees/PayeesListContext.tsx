import React, { useContext } from 'react';
import * as lodash from 'lodash';
import PayeesContext from './payees-context';
import DataGrid from '../common/DataGrid';

function PayeesListContext() {
  const { state, dispatch } = useContext(PayeesContext);

  const sortedPayees = lodash.orderBy(state.payees, state.sortField, state.sortDirection);

  function handleSelectHeader(field: string) {
    dispatch({
      type: 'sort',
      sortField: field
    });
  }

  return <DataGrid columns={state.columns} rows={sortedPayees} selectHeader={handleSelectHeader}/>
}

export default PayeesListContext;
