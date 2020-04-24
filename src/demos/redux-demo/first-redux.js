const redux = require('@reduxjs/toolkit');

const initialState = {
  counter: 0,
};

const incrementAction = {
  type: 'INCREMENT',
};

const add = (amount) => ({
    type: 'ADD',
    payload: {
      amount
    }
});

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'ADD':
      return { ...state, counter: state.counter + payload.amount };
    default:
      return state;
  }
};

const store = redux.createStore(reducer, initialState);
let lastState = store.getState();

store.subscribe(() => {
  const currentState = store.getState();
  if (currentState !== lastState) {
    console.log('Store state: ', currentState);
  }
  lastState = currentState;
});
store.dispatch(incrementAction);
store.dispatch(add(5));
store.dispatch(incrementAction);

store.dispatch({ type: 'FOO' });
