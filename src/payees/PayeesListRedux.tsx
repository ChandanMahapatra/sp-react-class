import { connect } from 'react-redux';
import DataGrid from '../common/DataGrid';
import { PayeesReduxState, sortPayees } from './payees-slice';
import { Dispatch } from '@reduxjs/toolkit';
import * as lodash from 'lodash';

// Input: columns, rows
const mapStateToProps = (state: PayeesReduxState) => {
  return {
    columns: state.columns,
    rows: lodash.orderBy(state.payees, state.sortField, state.sortDirection)
  };
};

// Output:
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectHeader: (field: string) => dispatch(sortPayees(field)),
  };
};

const PayeesListRedux = connect(mapStateToProps, mapDispatchToProps)(DataGrid);

export default PayeesListRedux;