import { combineReducers } from 'redux';

const testReducer = (state = [], action: any) => {
    switch(action.type) {
        case "ADD_TEST":
            return Object.assign({}, state, action.payload);
        default: return state
    }
}

const rootReducer = combineReducers({
    test: testReducer,
});

export default rootReducer;