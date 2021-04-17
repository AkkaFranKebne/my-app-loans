import { combineReducers } from 'redux';
import { AddTestAction, AddTotalsAction } from './actionTypes';
import { IState } from './stateTypes';

const testReducer = (state: IState | [] = [], action: AddTestAction) => {
  switch (action.type) {
    case 'ADD_TEST':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const totalsReducer = (state: IState | [] = [], action: AddTotalsAction) => {
  switch (action.type) {
    case 'ADD_TOTALS':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer,
  totals: totalsReducer,
});

export default rootReducer;
