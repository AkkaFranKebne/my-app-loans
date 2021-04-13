import { combineReducers } from 'redux';

const testReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_TEST':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const totalsReducer = (state = [], action: any) => {
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
