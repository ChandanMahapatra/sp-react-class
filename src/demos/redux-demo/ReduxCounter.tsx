import React from 'react';
import { createStore, AnyAction, Reducer, Dispatch } from '@reduxjs/toolkit';
import { connect, Provider } from 'react-redux';

type CounterState = {
  counter: number;
};

const initialState = {
  counter: 0,
};

const incrementAction = {
  type: 'INCREMENT',
};

const add = (amount: Number) => ({
  type: 'ADD',
  payload: {
    amount,
  },
});

const reducer: Reducer<CounterState, AnyAction> = (
  state = initialState,
  { type, payload }: AnyAction,
) => {
  switch (type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'ADD':
      return { ...state, counter: state.counter + payload.amount };
    default:
      return state;
  }
};

const store = createStore(reducer, { counter: 5 });

type CounterComponentProps = {
  counterValue: number; // state.counter
  onIncrement: () => void; // dispatch({type: 'INCREMENT'});
  onAddFive: () => void; // dispatch(add(5))
};

function CounterComponent({
  counterValue,
  onAddFive,
  onIncrement,
}: CounterComponentProps) {
  return (
    <div>
      <div>{counterValue}</div>
      <div>
        <button className="btn btn-primary" onClick={onIncrement}>
          Increment
        </button>
        &nbsp;
        <button className="btn btn-info" onClick={onAddFive}>
          Add 5
        </button>
      </div>
    </div>
  );
}

// Props that are inputs / values
const mapStateToProps = (state: CounterState) => {
  return {
    counterValue: state.counter
  }
}

// Props that are outputs / events
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrement: () => dispatch(incrementAction),
    onAddFive: () => dispatch(add(5))
  }
}

const ReduxCounter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

function ReduxCounterContainer(){
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  )
}

export default ReduxCounterContainer;