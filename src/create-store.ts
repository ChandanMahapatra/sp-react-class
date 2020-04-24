import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as payeesReducer, fetchPayees } from './payees/payees-slice';

const store = createStore(payeesReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));

// @ts-ignore
store.dispatch(fetchPayees());

export default store;
